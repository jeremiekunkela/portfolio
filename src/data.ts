import { TimelineItem, Skill, SocialLink, BlogPost, Project } from './types';

export const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: 'Expert en ingénierie du logiciel',
    organization: 'ESIEA',
    period: '2023 - Present',
    description: 'Spécialisation en Python, Architecture logicielle, Méthodologie Agile, JavaScript, Vision par ordinateur, Flutter, Framework Ionic',
    type: 'education',
    achievements: [
      'Major de promotion avec une moyenne de 17/20',
      'Projet de recherche en IA récompensé par le prix de l\'innovation',
      'Représentant des étudiants au conseil d\'administration'
    ]
  },
  {
    id: 2,
    title: 'Développeur Full Stack',
    organization: 'Urssaf Ile-de-France',
    period: 'Nov 2023 - Present',
    description: 'Développement d\'applications web avec React.js et Node.js en alternance',
    type: 'experience',
    location: 'Montreuil, Île-de-France',
    achievements: [
      'Réduction de 40% du temps de chargement des pages par l\'optimisation du code',
      'Mise en place d\'une architecture micro-frontends pour améliorer la maintenabilité',
      'Formation de 5 développeurs juniors aux bonnes pratiques React'
    ]
  },
  {
    id: 3,
    title: 'Développeur Full Stack',
    organization: 'KMB Labs',
    period: 'Mar 2023 - Aug 2023',
    description: 'Élaboration de produits (chatbots, moteurs de recherche, backoffice et autres services webs)',
    type: 'experience',
    location: 'Paris, Île-de-France'
  },
  {
    id: 4,
    title: 'Ingénieur de support technique',
    organization: 'AB Tasty',
    period: 'Jul 2022',
    description: 'Développement d\'extension chrome venant compléter le produit Ab tasty',
    type: 'experience',
    location: 'Paris, Île-de-France'
  },
  {
    id: 5,
    title: 'Bachelor en informatique',
    organization: 'INTECH',
    period: '2020 - 2023',
    description: 'Formation en développement logiciel avec mention très bien. Spécialisation en Java, Spring Boot, Vue.js, et pratiques DevOps',
    type: 'education'
  },
  {
    id: 6,
    title: 'Baccalauréat Scientifique',
    organization: 'Lycée Camille See',
    period: '2017 - 2020',
    description: 'Spécialité Mathématiques',
    type: 'education'
  }
];

export const skillsData: Skill[] = [
  { id: 1, name: 'React.js', level: 'Advanced', icon: 'Code', category: 'technical' },
  { id: 2, name: 'Node.js', level: 'Advanced', icon: 'Server', category: 'technical' },
  { id: 3, name: 'TypeScript', level: 'Intermediate', icon: 'FileType', category: 'technical' },
  { id: 4, name: 'Python', level: 'Advanced', icon: 'Code2', category: 'technical' },
  { id: 5, name: 'Java', level: 'Intermediate', icon: 'Coffee', category: 'technical' },
  { id: 6, name: 'Spring Boot', level: 'Intermediate', icon: 'Leaf', category: 'technical' },
  { id: 7, name: 'Vue.js', level: 'Intermediate', icon: 'Layout', category: 'technical' },
  { id: 8, name: 'DevOps', level: 'Beginner', icon: 'GitBranch', category: 'tools' },
  { id: 9, name: 'Agile', level: 'Advanced', icon: 'Users', category: 'soft' },
  { id: 10, name: 'Flutter', level: 'Beginner', icon: 'Smartphone', category: 'technical' }
];

export const socialLinks: SocialLink[] = [
  { id: 1, name: 'GitHub', url: 'https://github.com/', icon: 'Github' },
  { id: 2, name: 'LinkedIn', url: 'https://linkedin.com/', icon: 'Linkedin' },
  { id: 3, name: 'Twitter', url: 'https://twitter.com/', icon: 'Twitter' },
  { id: 4, name: 'Email', url: 'mailto:hello@example.com', icon: 'Mail' }
];

export const personalInfo = {
  name: 'Alex Morgan',
  title: 'Développeur Full Stack',
  bio: 'Passionné par le développement web et mobile, je suis actuellement en alternance chez Urssaf Ile-de-France tout en poursuivant mes études d\'ingénieur à l\'ESIEA. Je me spécialise dans les technologies modernes comme React, Node.js, et Spring Boot.',
  location: 'Paris, France',
  profileImage: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600'
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Les bonnes pratiques du développement React',
    slug: 'react-best-practices',
    excerpt: 'Découvrez les meilleures pratiques pour développer des applications React performantes et maintenables.',
    content: 'Contenu détaillé sur les bonnes pratiques React...',
    date: '2024-03-15',
    category: 'Compétence technique',
    readTime: 8,
    image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    title: 'Mon expérience en alternance',
    slug: 'alternance-experience',
    excerpt: 'Retour d\'expérience sur mon alternance en tant que développeur full stack.',
    content: 'Détails de mon expérience en alternance...',
    date: '2024-03-10',
    category: 'Réalisation',
    readTime: 6,
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    title: 'L\'importance du DevOps',
    slug: 'devops-importance',
    excerpt: 'Pourquoi le DevOps est devenu incontournable dans le développement moderne.',
    content: 'Exploration des principes DevOps...',
    date: '2024-03-05',
    category: 'Compétence transverse',
    readTime: 5,
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    title: 'Développement d\'une application de gestion de tâches',
    slug: 'task-management-app',
    excerpt: 'Comment j\'ai conçu et développé une application de gestion de tâches avec React et Node.js.',
    content: 'Dans ce projet, j\'ai développé une application complète de gestion de tâches utilisant React pour le frontend et Node.js pour le backend. L\'application permet aux utilisateurs de créer, organiser et suivre leurs tâches quotidiennes avec des fonctionnalités comme le drag-and-drop, les rappels et le partage d\'équipe.',
    date: '2024-03-01',
    category: 'Réalisation',
    readTime: 7,
    image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 5,
    title: 'Création d\'un chatbot intelligent pour le service client',
    slug: 'chatbot-service-client',
    excerpt: 'Retour d\'expérience sur le développement d\'un chatbot utilisant l\'IA pour améliorer le service client.',
    content: 'J\'ai dirigé le développement d\'un chatbot intelligent pour améliorer notre service client. En utilisant des technologies d\'IA et de NLP, nous avons créé un assistant virtuel capable de répondre aux questions fréquentes et de gérer les demandes simples des clients 24/7.',
    date: '2024-02-25',
    category: 'Réalisation',
    readTime: 8,
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 6,
    title: 'Refonte complète d\'une plateforme e-commerce',
    slug: 'ecommerce-platform-redesign',
    excerpt: 'Comment j\'ai modernisé une plateforme e-commerce vieillissante en utilisant des technologies modernes.',
    content: 'Ce projet de refonte a impliqué la modernisation complète d\'une plateforme e-commerce existante. Nous avons migré d\'une architecture monolithique vers une architecture microservices, amélioré les performances et ajouté de nouvelles fonctionnalités comme le paiement en un clic et les recommandations personnalisées.',
    date: '2024-02-20',
    category: 'Réalisation',
    readTime: 10,
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform built with React and Node.js, featuring user authentication, product management, and payment integration.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    demoUrl: 'https://ecommerce-demo.example.com',
    githubUrl: 'https://github.com/username/ecommerce',
    category: 'Personal'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, team features, and progress tracking.',
    technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    image: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    demoUrl: 'https://taskmanager-demo.example.com',
    githubUrl: 'https://github.com/username/taskmanager',
    videoUrl: 'https://youtube.com/watch?v=demo',
    category: 'Student'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A weather dashboard that displays current weather conditions and forecasts for multiple locations.',
    technologies: ['React', 'OpenWeather API', 'Chart.js'],
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    githubUrl: 'https://github.com/username/weather-dashboard',
    category: 'Personal'
  }
];