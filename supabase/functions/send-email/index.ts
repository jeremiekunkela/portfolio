import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

interface EmailRequest {
  from_name: string;
  from_email: string;
  message: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { from_name, from_email, message }: EmailRequest = await req.json()

    // Validation des données
    if (!from_name || !from_email || !message) {
      return new Response(
        JSON.stringify({ error: 'Tous les champs sont requis' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(from_email)) {
      return new Response(
        JSON.stringify({ error: 'Format d\'email invalide' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Configuration SMTP (utilise les variables d'environnement)
    const smtpConfig = {
      hostname: Deno.env.get('SMTP_HOSTNAME') || 'smtp.gmail.com',
      port: parseInt(Deno.env.get('SMTP_PORT') || '587'),
      username: Deno.env.get('SMTP_USERNAME'),
      password: Deno.env.get('SMTP_PASSWORD'),
    }

    if (!smtpConfig.username || !smtpConfig.password) {
      console.error('Configuration SMTP manquante')
      return new Response(
        JSON.stringify({ error: 'Configuration serveur manquante' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Création du message email
    const emailContent = `
De: ${from_name} <${from_email}>
À: jeremiekunkela@gmail.com
Sujet: Nouveau message depuis le portfolio

Nom: ${from_name}
Email: ${from_email}

Message:
${message}

---
Ce message a été envoyé depuis votre portfolio.
    `.trim()

    // Envoi de l'email via SMTP
    const response = await fetch(`https://api.smtp2go.com/v3/email/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Smtp2go-Api-Key': Deno.env.get('SMTP2GO_API_KEY') || '',
      },
      body: JSON.stringify({
        api_key: Deno.env.get('SMTP2GO_API_KEY'),
        to: ['jeremiekunkela@gmail.com'],
        sender: `${from_name} <noreply@${Deno.env.get('DOMAIN') || 'example.com'}>`,
        subject: `Nouveau message de ${from_name} - Portfolio`,
        text_body: emailContent,
        html_body: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">Nouveau message depuis votre portfolio</h2>
            <div style="background: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
              <p><strong>Nom:</strong> ${from_name}</p>
              <p><strong>Email:</strong> ${from_email}</p>
            </div>
            <div style="background: white; padding: 20px; border-left: 4px solid #E11D48;">
              <h3>Message:</h3>
              <p style="line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
            </div>
            <hr style="margin: 30px 0;">
            <p style="color: #666; font-size: 12px;">Ce message a été envoyé depuis votre portfolio.</p>
          </div>
        `,
        custom_headers: [
          {
            header: 'Reply-To',
            value: from_email
          }
        ]
      })
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error('Erreur SMTP2GO:', errorData)
      throw new Error('Erreur lors de l\'envoi de l\'email')
    }

    const result = await response.json()
    
    if (result.data && result.data.succeeded > 0) {
      return new Response(
        JSON.stringify({ success: true, message: 'Email envoyé avec succès' }),
        { 
          status: 200, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    } else {
      throw new Error('Échec de l\'envoi de l\'email')
    }

  } catch (error) {
    console.error('Erreur:', error)
    return new Response(
      JSON.stringify({ 
        error: 'Erreur lors de l\'envoi de l\'email',
        details: error.message 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})