import { TimelineItem, Skill, SocialLink, BlogPost, Project } from './types';
import profil from './assets/images/profil.jpg';
import spaceMonopoly from './assets/images/miniature/space_monopoly.png';


export const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: 'Expert en ingénierie du logiciel',
    organization: 'ESIEA',
    period: '2023 - Présent',
    description: 'Titre d\'expert en ingénierie du logiciel',
    type: 'education',
    location: 'Ivry-sur-Seine, Île-de-France',
    skills: ['Python', 'Architecture logicielle', 'Méthodologie Agile', 'JavaScript', 'Vision par ordinateur', 'Flutter', 'Ionic', 'Programmation fonctionnelle']
  },
  {
    id: 2,
    title: 'Développeur Full Stack',
    organization: 'Urssaf Ile-de-France',
    period: 'Nov 2023 - Présent',
    description: 'Développement autonome d\'une application de réservation de salles, création d\'un script automatisé pour améliorer le processus de restitution de matériel, et développement d\'une application pour suivre et gérer ce processus.',
    type: 'experience',
    location: 'Montreuil, Île-de-France',
    skills: ['React.js', 'Node.js', 'TypeScript', 'Redux RTK Query', 'MUI', 'MySQL', 'Sequelize', 'Docker', 'Nodemailer', 'Handlebars', 'MongoDB', 'JavaFX', 'PHP', 'Microservices', 'APIs REST']
  },
  {
    id: 3,
    title: 'Développeur Full Stack',
    organization: 'KMB Labs',
    period: 'Mar 2023 - Août 2023',
    description: 'Développement de chatbots clients, mise en place de parcours WhatsApp, création de lambdas pour usage spécifique, et amélioration du backoffice.',
    type: 'experience',
    location: 'Paris, Île-de-France',
    skills: ['Node.js', 'Chatbots', 'API 360 Dialogs', 'AWS Lambda', 'JavaScript', 'Serverless Framework', 'React', 'Système de design', 'Développement piloté par les tests', 'Programmation orientée objet (POO)']
  },
  {
    id: 4,
    title: 'Ingénieur de support technique',
    organization: 'AB Tasty',
    period: 'Juil 2022 - Août 2022',
    description: 'Conception et développement d\'une extension Chrome permettant la visualisation et la consultation des tests en cours directement depuis l\'extension, avec injection de script sur les pages web des tests.',
    type: 'experience',
    location: 'Paris, Île-de-France',
    skills: ['React.js', 'Node.js', 'JavaScript', 'HTML', 'CSS', 'API Chrome', 'API AB Tasty', 'Intégration et livraison continues (CI/CD)']
  },
  {
    id: 5,
    title: 'Bachelor en informatique',
    organization: 'INTECH',
    period: '2020 - 2023',
    description: 'Bachelor en informatique',
    type: 'education',
    location: 'Ivry-sur-Seine, Île-de-France',
    skills: [
      'Java', 
      'Spring Boot', 
      'Vue.js', 
      'DevOps', 
      'WAMP', 
      'JavaFX', 
      'PHP', 
      'Microservices', 
      'APIs REST', 
      'Développement piloté par les tests', 
      'Programmation orientée objet (POO)', 
      'Intégration et livraison continues (CI/CD)', 
      'Node.js'
    ]
  },
  {
    id: 6,
    title: 'Baccalauréat Scientifique',
    organization: 'Lycée Camille See',
    period: '2017 - 2020',
    description: 'Attribution du baccalauréat scientifique',
    type: 'education',
    location: 'Paris, Île-de-France',
    skills: ['Spécialité Mathématiques', 'Matières Scientifiques']
  }
];
export const skillsData: Skill[] = [
  { id: 1, name: 'React.js', level: 'Intermediate', icon: 'Code', category: 'technical' },
  { id: 2, name: 'Node.js', level: 'Intermediate', icon: 'Server', category: 'technical' },
  { id: 3, name: 'TypeScript', level: 'Intermediate', icon: 'FileType', category: 'technical' },
  { id: 4, name: 'Administration Système Linux', level: 'Beginner', icon: 'Terminal', category: 'technical' },
  { id: 5, name: 'Git', level: 'Intermediate', icon: 'GitBranch', category: 'technical' },
  { id: 6, name: 'CSS', level: 'Intermediate', icon: 'Palette', category: 'technical' },
  { id: 7, name: 'JavaScript', level: 'Intermediate', icon: 'Code', category: 'technical' },
  { id: 8, name: 'Programmation Fonctionnelle', level: 'Beginner', icon: 'Function', category: 'technical' },
  { id: 9, name: 'Docker', level: 'Beginner', icon: 'Box', category: 'technical' },
  { id: 10, name: 'Agile', level: 'Beginner', icon: 'Users', category: 'soft' },
  { id: 11, name: 'Résilience', icon: 'Shield', category: 'soft' },
  { id: 12, name: 'Optimisme', icon: 'Smile', category: 'soft' },
  { id: 13, name: 'Rigueur', icon: 'CheckCircle', category: 'soft' },
  { id: 14, name: 'Discipline', icon: 'Clock', category: 'soft' },
  { id: 15, name: 'Travail d\'équipe', icon: 'Team', category: 'soft' },
  { id: 16, name: 'Autonomie', icon: 'User', category: 'soft' },
  { id: 17, name: 'Anglais', level: 'Intermediate', icon: 'Globe', category: 'language' },
  { id: 18, name: 'Français', level: 'Advanced', icon: 'Globe', category: 'language' },
  { id: 19, name: 'Visual Studio Code', level: 'Intermediate', icon: 'Code2', category: 'tools' },
  { id: 20, name: 'Postman', level: 'Intermediate', icon: 'Server', category: 'tools' },
  { id: 21, name: 'Figma', level: 'Beginner', icon: 'Layout', category: 'tools' },
  { id: 24, name: 'SQL', level: 'Intermediate', icon: 'Database', category: 'technical' },
];


export const socialLinks: SocialLink[] = [
  { id: 1, name: 'GitHub', url: 'https://github.com/', icon: 'Github' },
  { id: 2, name: 'LinkedIn', url: 'https://linkedin.com/', icon: 'Linkedin' },
  { id: 3, name: 'Twitter', url: 'https://twitter.com/', icon: 'Twitter' },
  { id: 4, name: 'Email', url: 'mailto:hello@example.com', icon: 'Mail' }
];

export const personalInfo = {
  name: 'Jérémie Kunkela',
  title: 'Développeur Full Stack',
  bio: 'Passionné par le développement web, je suis actuellement en alternance chez Urssaf Ile-de-France tout en poursuivant mes études d\'ingénieur à l\'ESIEA. Je me spécialise dans les technologies modernes gravitant autour du langage Javascript.',
  location: 'Paris, France',
  profileImage: profil,
};

export const blogPosts: BlogPost[] = [
  // {
  //   id: 1,
  //   title: 'Les bonnes pratiques du développement React',
  //   slug: 'react-best-practices',
  //   excerpt: 'Découvrez les meilleures pratiques pour développer des applications React performantes et maintenables.',
  //   content: 'Contenu détaillé sur les bonnes pratiques React...',
  //   date: '2024-03-15',
  //   category: 'Compétence technique',
  //   readTime: 8,
  //   image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  // },
  // {
  //   id: 2,
  //   title: 'Mon expérience en alternance',
  //   slug: 'alternance-experience',
  //   excerpt: 'Retour d\'expérience sur mon alternance en tant que développeur full stack.',
  //   content: 'Détails de mon expérience en alternance...',
  //   date: '2024-03-10',
  //   category: 'Réalisation',
  //   readTime: 6,
  //   image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  // },
  // {
  //   id: 3,
  //   title: 'L\'importance du DevOps',
  //   slug: 'devops-importance',
  //   excerpt: 'Pourquoi le DevOps est devenu incontournable dans le développement moderne.',
  //   content: 'Exploration des principes DevOps...',
  //   date: '2024-03-05',
  //   category: 'Compétence transverse',
  //   readTime: 5,
  //   image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  // },
  // {
  //   id: 4,
  //   title: 'Développement d\'une application de gestion de tâches',
  //   slug: 'task-management-app',
  //   excerpt: 'Comment j\'ai conçu et développé une application de gestion de tâches avec React et Node.js.',
  //   content: 'Dans ce projet, j\'ai développé une application complète de gestion de tâches utilisant React pour le frontend et Node.js pour le backend. L\'application permet aux utilisateurs de créer, organiser et suivre leurs tâches quotidiennes avec des fonctionnalités comme le drag-and-drop, les rappels et le partage d\'équipe.',
  //   date: '2024-03-01',
  //   category: 'Réalisation',
  //   readTime: 7,
  //   image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  // },
  // {
  //   id: 5,
  //   title: 'Création d\'un chatbot intelligent pour le service client',
  //   slug: 'chatbot-service-client',
  //   excerpt: 'Retour d\'expérience sur le développement d\'un chatbot utilisant l\'IA pour améliorer le service client.',
  //   content: 'J\'ai dirigé le développement d\'un chatbot intelligent pour améliorer notre service client. En utilisant des technologies d\'IA et de NLP, nous avons créé un assistant virtuel capable de répondre aux questions fréquentes et de gérer les demandes simples des clients 24/7.',
  //   date: '2024-02-25',
  //   category: 'Réalisation',
  //   readTime: 8,
  //   image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  // },
  // {
  //   id: 6,
  //   title: 'Refonte complète d\'une plateforme e-commerce',
  //   slug: 'ecommerce-platform-redesign',
  //   excerpt: 'Comment j\'ai modernisé une plateforme e-commerce vieillissante en utilisant des technologies modernes.',
  //   content: 'Ce projet de refonte a impliqué la modernisation complète d\'une plateforme e-commerce existante. Nous avons migré d\'une architecture monolithique vers une architecture microservices, amélioré les performances et ajouté de nouvelles fonctionnalités comme le paiement en un clic et les recommandations personnalisées.',
  //   date: '2024-02-20',
  //   category: 'Réalisation',
  //   readTime: 10,
  //   image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  // }
];

export const projectsData: Project[] = [
   {
    id: 1,
    title: 'Space monopoly',
    description: 'Un jeu de société bureau sur le thème de l\'espace, inspiré du Monopoly en 3D.',
    technologies: ['Java', 'JavaFX', 'Blender'],
    image: spaceMonopoly,
    demoUrl: 'https://www.youtube.com/watch?v=sZujKdlejeA&ab_channel=Jeremie',
    category: 'Student',
  },
  // {
  //   id: 1,
  //   title: 'E-commerce Platform',
  //   description: 'A full-featured e-commerce platform built with React and Node.js, featuring user authentication, product management, and payment integration.',
  //   technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  //   image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   demoUrl: 'https://ecommerce-demo.example.com',
  //   githubUrl: 'https://github.com/username/ecommerce',
  //   category: 'Personal'
  // },
  // {
  //   id: 2,
  //   title: 'Task Management App',
  //   description: 'A collaborative task management application with real-time updates, team features, and progress tracking.',
  //   technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
  //   image: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   demoUrl: 'https://taskmanager-demo.example.com',
  //   githubUrl: 'https://github.com/username/taskmanager',
  //   videoUrl: 'https://youtube.com/watch?v=demo',
  //   category: 'Student'
  // },
  // {
  //   id: 3,
  //   title: 'Weather Dashboard',
  //   description: 'A weather dashboard that displays current weather conditions and forecasts for multiple locations.',
  //   technologies: ['React', 'OpenWeather API', 'Chart.js'],
  //   image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   githubUrl: 'https://github.com/username/weather-dashboard',
  //   category: 'Personal'
  // }
];