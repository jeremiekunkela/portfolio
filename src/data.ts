import { TimelineItem, Skill, SocialLink, BlogPost, Project } from './types';
import profil from './assets/images/profil.jpg';
import spaceMonopoly from './assets/images/miniatures/projects/space_monopoly.png';
import phoneMarket from './assets/images/miniatures/projects/phone_market.png';
import fastlink from './assets/images/miniatures/projects/fastlink.png';
import optimisationRestitution from './assets/images/miniatures/blogs/optimisation_restitution.jpg';


export const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: 'Expert en ingénierie du logiciel',
    organization: "ESIEA",
    period: '2023 - Présent',
    description: 'Titre d\'expert en ingénierie du logiciel',
    type: 'education',
    location: 'Ivry-sur-Seine',
    skills: ['Python', 'Architecture logicielle', 'Agile', 'JavaScript', 'Vision par ordinateur', 'Flutter', 'Ionic', 'Programmation fonctionnelle']
  },
  {
    id: 2,
    title: 'Développeur Full Stack',
    organization: 'Urssaf Ile-de-France',
    period: 'Nov 2023 - Présent',
    description: 'Développement d\'applications de réservation de salle et de suivi de restitution de matériel pour les employés en départ.',
    type: 'experience',
    location: 'Montreuil',
    skills: ['React.js', 'Node.js', 'TypeScript', 'Redux', 'MUI', 'MySQL', 'Sequelize', 'Docker', 'Nodemailer', 'Handlebars', 'MongoDB', 'JavaFX', 'PHP', 'Microservices', 'APIs REST']
  },
  {
    id: 3,
    title: 'Développeur Full Stack',
    organization: 'KMB Labs',
    period: 'Mar 2023 - Août 2023',
    description: 'Développement de parcours WhatsApp, chatbots client et lambdas d\'envoi de notification, amélioration du backoffice.',
    type: 'experience',
    location: 'Paris',
    skills: ['Node.js', 'Chatbots', 'API 360 Dialogs', 'AWS Lambda', 'JavaScript', 'Serverless', 'React', 'Design system', 'TDD', 'POO']
  },
  {
    id: 4,
    title: 'Ingénieur de support technique',
    organization: 'AB Tasty',
    period: 'Juil 2022 - Août 2022',
    description: 'Développement d\'une extension Chrome pour visualiser les tests.',
    type: 'experience',
    location: 'Paris',
    skills: ['React.js', 'Node.js', 'JavaScript', 'HTML', 'CSS', 'API Chrome', 'API AB Tasty', 'CI/CD']
  },
  {
    id: 5,
    title: 'Bachelor en informatique',
    organization: 'INTECH',
    period: '2020 - 2023',
    description: 'Bachelor en informatique',
    type: 'education',
    location: 'Ivry-sur-Seine',
    skills: [
      'Java', 'Spring Boot', 'Vue.js', 'DevOps', 'WAMP', 'JavaFX', 'PHP', 'Microservices', 'APIs REST', 'TDD', 'POO', 'CI/CD', 'Node.js'
    ]
  },
  {
    id: 6,
    title: 'Baccalauréat Scientifique',
    organization: 'Lycée Camille See',
    period: '2017 - 2020',
    description: 'Baccalauréat scientifique',
    type: 'education',
    location: 'Paris',
    skills: ['Mathématiques', 'Sciences']
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
  { id: 18, name: 'Français', level: 'Native', icon: 'Globe', category: 'language' },
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
  {
    id: 7,
    title: 'Optimisation du suivi de restitution du matériel',
    slug: 'optimisation-restitution-materiel',
    excerpt: 'Dans toute entreprise, la gestion et la restitution du matériel informatique lors du départ d’un collaborateur sont des enjeux majeurs pour la sécurité, la maîtrise des coûts et l’optimisation des processus internes. Ce projet vise à fiabiliser et automatiser ce suivi, tout en offrant une meilleure visibilité aux équipes informatiques et RH.',
    content: [
      "Dans de nombreuses entreprises, la restitution du matériel informatique lors du départ d’un employé est un processus critique, souvent source de pertes matérielles, de complexité administrative et de risques de sécurité. Une gestion rigoureuse de ces restitutions contribue directement à l’optimisation de la gestion interne, à la réduction des coûts et à la sécurisation du parc informatique.",
      "Dans mon entreprise, ce processus n’était pas suffisamment suivi, ce qui compliquait le travail des informaticiens locaux (IL) et des ressources humaines (RH). Après une analyse des besoins, nous avons décidé de mettre en place un script automatisé permettant d’identifier les employés sur le départ à J-X jours, de leur envoyer une première notification pour les inviter à prendre rendez-vous avec un informaticien via un outil interne, puis de programmer plusieurs relances si aucune action n’était prise.",
      "Si, après le départ de l’employé, aucun matériel n’était restitué, une nouvelle étape de suivi était déclenchée, informant les RH pour qu’ils puissent engager des actions si nécessaire.",
      "### Automatiser pour fiabiliser le suivi",
      "J’ai choisi de développer ce script en Node.js et TypeScript, afin de garantir la robustesse et la fiabilité du traitement des données. Node.js s’est imposé pour sa performance et sa capacité à s’intégrer facilement avec les outils internes de l’entreprise.",
      "Rapidement, il est apparu qu’une simple automatisation ne suffisait pas : les équipes avaient besoin d’une visibilité en temps réel sur l’état des restitutions. J’ai donc proposé et développé une interface web en React et Node.js, permettant de piloter l’ensemble du processus.",
      "### Une interface pour centraliser l’information",
      "L’interface permet de visualiser qui a pris rendez-vous, qui a restitué ou non son matériel, et qui doit partir dans les prochains jours. Elle offre également la possibilité d’ajouter des commentaires pour suivre les restitutions et de déclarer manuellement des rendez-vous, bien que la plupart soient récupérés automatiquement depuis l’outil interne.",
      "Grâce à cette interface, les IL et les RH disposent d’une vision claire et centralisée du processus. J’ai également ajouté une fonctionnalité permettant d’interrompre le suivi pour des cas spécifiques, par exemple lorsqu’un employé conserve du matériel pour une mission future.",
      "### Un impact concret sur la gestion interne",
      "Depuis la mise en place de ce processus, 90 restitutions ont été gérées avec succès, et seul un employé n’a pas restitué son matériel depuis octobre 2024. Ce projet a permis d’optimiser la gestion interne, de sécuriser le parc informatique et de faciliter le travail des équipes concernées.",
      "### Des perspectives d’évolution",
      "À court terme, des améliorations sont déjà prévues : extension à d’autres types de matériel (par exemple, les chaises ergonomiques), ouverture d’un module RH pour saisir les étapes du processus, et ajout d’une page de statistiques pour suivre l’évolution du taux de restitution.",
      "Le script évoluera également pour prendre en compte davantage de types de contrats, certains n’étant pas encore gérés pour des raisons administratives.",
      "### Un projet à forte valeur ajoutée",
      "Ce projet illustre l’importance d’optimiser les processus internes dans une entreprise, en s’appuyant sur l’automatisation et la centralisation de l’information. Il m’a permis de renforcer mes compétences en développement full-stack et en gestion de projet, tout en apportant une réelle valeur ajoutée à l’organisation.",
      "Si c’était à refaire, j’impliquerais encore plus les utilisateurs finaux dès les premières étapes pour optimiser l’interface et le processus. Aujourd’hui, je suis fier d’avoir contribué à une meilleure gestion interne et à la sécurisation du matériel de l’entreprise."
    ].join('\n'),
    date: '2025-05-18', 
    category: 'Réalisation',
    readTime: 10,
    image: optimisationRestitution,
    skills: ['Node.js', 'TypeScript', 'React', 'Gestion de projet', 'Automatisation', 'Ergonomie d\'une application'],
  },
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
  {
    id: 2,
    title: 'Phone market',
    description: 'Une application de gestion de marché de téléphones, permettant aux utilisateurs d\'acheter et de vendre des téléphones.',
    technologies: ['PHP', 'SQL', 'HTML', 'CSS', 'WAMP'],
    image: phoneMarket,
    demoUrl: 'https://www.youtube.com/watch?v=mZ2vzl0wdWY&ab_channel=Jeremie',
    category: 'Student',
  },
  {
    id: 3,
    title: 'Fastlink',
    description: 'Un outil de gestion de liens, permettant aux utilisateurs de raccourcir et de partager des liens facilement.',
    technologies: ['Vue.js', 'Spring Boot', 'Architecture Microservices'],
    image: fastlink,
    demoUrl: 'https://www.youtube.com/watch?v=J2OWjOt3pQ4',
    category: 'Student',
  },
];
