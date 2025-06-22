import { TimelineItem, Skill, SocialLink, BlogPost, Project } from "./types";
import profil from "./assets/images/profil.jpg";
import spaceMonopoly from "./assets/images/miniatures/projects/space_monopoly.png";
import phoneMarket from "./assets/images/miniatures/projects/phone_market.png";
import fastlink from "./assets/images/miniatures/projects/fastlink.png";
import optimisationRestitution from "./assets/images/miniatures/blogs/optimisation_restitution.jpg";
import escxv from "./assets/images/miniatures/blogs/escxv.jpg";
import teamSpirit from "./assets/images/miniatures/blogs/team_spirit.jpg";
import resilience from "./assets/images/miniatures/blogs/resilience.jpg";
import espritCritique from "./assets/images/miniatures/blogs/esprit_critique.jpg";
import fullstackDevelopper from "./assets/images/miniatures/blogs/fullstack_developper.jpg";
import codeCleanly from "./assets/images/miniatures/blogs/coder_proprement.png";
import functionalProgramming from "./assets/images/miniatures/blogs/programmer_fonctionnellement.jpg";

export const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: "Expert en ingénierie du logiciel",
    organization: "ESIEA",
    period: "2023 - Présent",
    description: "Titre d'expert en ingénierie du logiciel",
    type: "education",
    location: "Ivry-sur-Seine",
    skills: [
      "Python",
      "Architecture logicielle",
      "Agile",
      "JavaScript",
      "Vision par ordinateur",
      "Flutter",
      "Ionic",
      "Programmation fonctionnelle",
    ],
  },
  {
    id: 2,
    title: "Développeur Full Stack",
    organization: "Urssaf Ile-de-France",
    period: "Nov 2023 - Présent",
    description:
      "Développement de solutions applicatives et automatisées pour les directions métier.",
    type: "experience",
    location: "Montreuil",
    skills: [
      "React.js",
      "Node.js",
      "TypeScript",
      "MySQL",
      "Docker",
      "MongoDB",
      "Administration Système Linux",
    ],
  },
  {
    id: 3,
    title: "Développeur Full Stack",
    organization: "KMB Labs",
    period: "Mar 2023 - Août 2023",
    description:
      "Développement de parcours WhatsApp, chatbots client et lambdas d'envoi de notification, amélioration du backoffice.",
    type: "experience",
    location: "Paris",
    skills: [
      "JavaScript",
      "Node.js",
      "React",
      "API 360 Dialogs",
      "AWS Lambda",
      "Serverless",
      "Programmation fonctionnel",
    ],
  },
  {
    id: 4,
    title: "Ingénieur de support technique",
    organization: "AB Tasty",
    period: "Juil 2022 - Août 2022",
    description:
      "Développement d'une extension Chrome pour visualiser des informations concernant des informations concernant des tests AB (A/B testing).",
    type: "experience",
    location: "Paris",
    skills: [
      "React.js",
      "JavaScript",
      "API Chrome",
      "API AB Tasty",
      "A/B Testing",
    ],
  },
  {
    id: 5,
    title: "Bachelor en informatique",
    organization: "INTECH",
    period: "2020 - 2023",
    description: "Bachelor en informatique (Avec mention)",
    type: "education",
    location: "Ivry-sur-Seine",
    skills: [
      "Java",
      "Spring Boot",
      "Vue.js",
      "DevOps",
      "WAMP",
      "JavaFX",
      "PHP",
      "Microservices",
      "APIs REST",
      "TDD",
      "POO",
      "CI/CD",
      "Node.js",
    ],
  },
  {
    id: 6,
    title: "Baccalauréat Scientifique",
    organization: "Lycée Camille See",
    period: "2017 - 2020",
    description: "Baccalauréat scientifique (Admis)",
    type: "education",
    location: "Paris",
    skills: ["Baccalauréat général", "Spécialité mathématique"],
  },
];
export const skillsData: Skill[] = [
  {
    id: 1,
    name: "React.js",
    level: "Intermediate",
    icon: "Code",
    category: "technical",
  },
  {
    id: 2,
    name: "Node.js",
    level: "Intermediate",
    icon: "Server",
    category: "technical",
  },
  {
    id: 3,
    name: "TypeScript",
    level: "Intermediate",
    icon: "FileType",
    category: "technical",
  },
  {
    id: 4,
    name: "Administration Système Linux",
    level: "Intermediate",
    icon: "Terminal",
    category: "technical",
  },
  {
    id: 5,
    name: "Git",
    level: "Intermediate",
    icon: "GitBranch",
    category: "technical",
  },
  {
    id: 6,
    name: "CSS",
    level: "Intermediate",
    icon: "Palette",
    category: "technical",
  },
  {
    id: 7,
    name: "JavaScript",
    level: "Intermediate",
    icon: "Code",
    category: "technical",
  },
  {
    id: 8,
    name: "Programmation Fonctionnelle",
    level: "Beginner",
    icon: "Function",
    category: "technical",
  },
  {
    id: 9,
    name: "Docker",
    level: "Intermediate",
    icon: "Box",
    category: "technical",
  },
  {
    id: 25,
    name: "Next.js",
    level: "Beginner",
    icon: "Layout",
    category: "technical",
  },
  { id: 10, name: "Agile", level: "Beginner", icon: "Users", category: "soft" },
  { id: 11, name: "Résilience", icon: "Shield", category: "soft" },
  { id: 12, name: "Optimisme", icon: "Smile", category: "soft" },
  { id: 13, name: "Rigueur", icon: "CheckCircle", category: "soft" },
  { id: 14, name: "Discipline", icon: "Clock", category: "soft" },
  { id: 15, name: "Esprit d'équipe", icon: "Team", category: "soft" },
  { id: 16, name: "Autonomie", icon: "User", category: "soft" },
  { id: 28, name: "Esprit critique", icon: "Brain", category: "soft" },
  {
    id: 17,
    name: "Anglais",
    level: "Intermediate",
    icon: "Globe",
    category: "language",
  },
  {
    id: 18,
    name: "Français",
    level: "Native",
    icon: "Globe",
    category: "language",
  },
  {
    id: 19,
    name: "Visual Studio Code",
    level: "Intermediate",
    icon: "Code2",
    category: "tools",
  },
  {
    id: 20,
    name: "Postman",
    level: "Intermediate",
    icon: "Server",
    category: "tools",
  },
  {
    id: 21,
    name: "Figma",
    level: "Beginner",
    icon: "Layout",
    category: "tools",
  },
  {
    id: 24,
    name: "SQL",
    level: "Intermediate",
    icon: "Database",
    category: "technical",
  },
  {
    "id": 22,
    "name": "NoSQL",
    "level": "Beginner",
    "icon": "Database",
    "category": "technical"
  }
];

export const socialLinks: SocialLink[] = [
  { id: 2, name: "LinkedIn", url: "https://www.linkedin.com/in/jérémie-kunkela", icon: "Linkedin" },
  { id: 4, name: "Email", url: "mailto:jeremiekunkela@gmail.com", icon: "Mail" },
];

export const personalInfo = {
  name: "Jérémie Kunkela",
  title: "Développeur Full Stack",
  bio: "Passionné par le développement web, je suis actuellement en alternance chez Urssaf Ile-de-France tout en poursuivant mes études d'ingénieur à l'ESIEA. Je me spécialise dans les technologies modernes gravitant autour du langage Javascript.",
  location: "Paris, France",
  profileImage: profil,
};

export const blogPosts: BlogPost[] = [
  {
    id: 7,
    title: "Optimisation du suivi et de la restitution du matériel des employés en départ",
    slug: "optimisation-suivi-restitution-materiel",
    excerpt: "Cet article présente un projet d'optimisation du suivi et de la restitution du matériel des employés en départ, réalisé dans le cadre de mon alternance chez Urssaf Ile-de-France.",
    content: "/blogs/realisations/optimisation-suivi-restitution-materiel.md",
    date: "2025-05-18",
    category: "project",
    readTime: 10,
    image: optimisationRestitution,
    skills: [
      "Node.js",
      "TypeScript",
      "React",
      "Gestion de projet",
      "Automatisation",
      "Ergonomie d'une application",
    ],
  },
  {
    id: 8,
    title: "Développement d’un nouveau site web pour mon club d’athlétisme",
    slug: "refonte-site-club-athletisme",
    excerpt:
      "Cet article présente la refonte du site web de mon club d'athlétisme, visant à améliorer l'expérience utilisateur et à moderniser la présentation des informations.",
    content: "/blogs/realisations/refonte-site-club-athletisme.md",
    date: "2024-09-10",
    category: "project",
    readTime: 8,
    image: escxv,
    skills: [
      "Next.js",
      "React",
      "Déploiement",
      "UX/UI",
      "Gestion de projet",
      "SEO",
    ],
  },
  {
    id: 9,
    title: "Refonte de l’outil de gestion d'un réservation",
    slug: "refonte-grr-outil-reservation",
    excerpt:
      "Cet article présente la refonte de l'outil de gestion des réservations, visant à améliorer l'expérience utilisateur et à optimiser les performances de l'application.",
    content: "/blogs/realisations/refonte-grr-outil-reservation.md",
    date: "2025-03-01",
    category: "project",
    readTime: 10,
    image: optimisationRestitution,
    skills: [
      "Node.js",
      "React",
      "TypeScript",
      "Gestion de projet",
      "Docker",
      "Administration Système Linux",
    ],
  },
  {
    id: 10,
    title: "Ma vision du développeur fullstack : l’artisan du numérique moderne",
    slug: "fullstack-developper",
    excerpt: "Cet article explore ma vision du développeur fullstack, un artisan du numérique moderne capable de concevoir des solutions complètes et adaptées aux besoins des utilisateurs.",
    content: "/blogs/techniques/fullstack-developper.md",
    date: "2025-06-13",
    category: "technical",
    readTime: 7,
    image: fullstackDevelopper,
  },
  {
    id: 14,
    title: "Comment j'écris du code propre et maintenable",
    slug: "coder-proprement",
    excerpt:
      "Cet article présente mes retours d’expérience et conseils pratiques pour écrire un code propre et maintenable, tirés de mon parcours professionnel et étudiant, ainsi que des principes de Robert C. Martin, auteur de Clean Code.",
    content: "/blogs/techniques/coder-proprement.md",
    date: "2025-06-13",
    category: "technical",
    readTime: 15,
    image: codeCleanly,
  },
  {
    id: 16,
    title:
      "Ma philosophie de développement : Programmer Fonctionnellement",
    slug: "programmer-fonctionnellement",
    excerpt:"Cet article reflète mon approche pratique de la programmation fonctionnelle, forgée par l'expérience terrain chez KMB Labs et validée par des projets concrets.",
    content: "/blogs/techniques/programmer-fonctionnellement.md",
    date: "2025-06-13",
    category: "technical",
    readTime: 10,
    image: functionalProgramming,
  },
  {
    id: 17,
    title: "L’esprit d’équipe : un levier de réussite dans le sport comme dans le développement",
    slug: "esprit-equipe",
    excerpt:
      "Cet article explore l'importance de l'esprit d'équipe dans le développement logiciel, en soulignant comment il favorise la collaboration, l'innovation et la réussite collective.",
    content: "/blogs/transversals/esprit-equipe.md",
    date: "2025-06-13",
    category: "transversal",
    readTime: 7,
    image: teamSpirit,
  },
  {
    id: 18,
    title: "Compétence Transverse : Esprit Critique",
    slug: "competence-transverse-esprit-critique",
    excerpt:
      "Cet article explore l'importance de l'esprit critique dans le développement logiciel, en soulignant comment il permet d'analyser, questionner et améliorer les solutions techniques pour répondre aux besoins des utilisateurs.",
    content:"/blogs/transversals/esprit-critique.md",
    date: "2025-06-13",
    category: "transversal",
    readTime: 8,
    image: espritCritique,
  },
  {
    id: 19,
    title: "Résilience : la clé pour surmonter les défis du développement",
    slug: "resilience-developpement",
    excerpt:
      "Cet article explore comment la résilience, tant personnelle que collective, est essentielle pour surmonter les défis du développement logiciel et atteindre ses objectifs.",
    content: "/blogs/transversals/resilience.md",
    date: "2025-06-13",
    category: "transversal",
    readTime: 6,
    image: resilience,
  }
];

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Space monopoly",
    description:
      "Un jeu de société bureau sur le thème de l'espace, inspiré du Monopoly en 3D.",
    technologies: ["Java", "JavaFX", "Blender"],
    image: spaceMonopoly,
    videoUrl: "https://www.youtube.com/watch?v=sZujKdlejeA&ab_channel=Jeremie",
    category: "Student",
  },
  {
    id: 2,
    title: "Phone market",
    description:
      "Une application de gestion de marché de téléphones, permettant aux utilisateurs d'acheter et de vendre des téléphones.",
    technologies: ["PHP", "MYSQL", "HTML", "CSS", "WAMP"],
    image: phoneMarket,
    videoUrl: "https://www.youtube.com/watch?v=mZ2vzl0wdWY&ab_channel=Jeremie",
    category: "Student",
  },
  {
    id: 3,
    title: "Fastlink",
    description:
      "Un outil de gestion de liens, permettant aux utilisateurs de raccourcir et de partager des liens facilement.",
    technologies: [
      "Vue.js",
      "Spring Boot",
      "Java",
      "MYSQL",
      "Architecture Microservices",
    ],
    image: fastlink,
    videoUrl: "https://www.youtube.com/watch?v=J2OWjOt3pQ4",
    category: "Student",
  },
  {
    id: 4,
    title: "Site web ESCXV Athlétisme",
    description:
      "Site web du club d'athlétisme avec horaires, groupes d'entraînement et lieux de pratique.",
    technologies: ["Next.js", "Vercel"],
    image: escxv,
    demoUrl: "https://www.esc15-athletisme.com",
    category: "Personal",
  },
];
