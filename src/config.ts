export const siteConfig = {
  name: "Oswald NOUNAGNON",
  title: "Développeur Backend & Étudiant Ingénieur IA",
  description: "Portfolio d'Oswald NOUNAGNON - Développeur Backend .NET",
  accentColor: "#1d4ed8",
  social: {
    email: "hnounagnonoswald@gmail.com",
    linkedin: "https://www.linkedin.com/in/toudonou/",
    twitter: "",
    github: "https://github.com/Toudonou",
  },
  aboutMe:
    "Étudiant ingénieur en informatique (spécialité IA) à l'EILCO, alternant développeur backend .NET chez CGI Finance - SG. Passionné par les langages systèmes comme le Rust et le C++. Rigoureux et déterminé, je recherche un CDI à partir de septembre 2026. Mobile partout en France et ouvert à l'international.",
  skills: ["C/C++", "Rust", "C#", "Java", "Python", "SQL", "Bash", ".NET", "Docker", "Git", "Azure DevOps", "Agile (SAFe)"],
  projects: [
    {
      name: "Zeno",
      description:
        "Bot d'échecs développé en Rust avec algorithme Alpha-Bêta, Move Ordering, Bitboards et tables de transposition pour la mise en cache des positions",
      link: "https://github.com/Toudonou/zeno",
      skills: ["Rust", "Algorithmes", "Alpha-Bêta"],
    },
    {
      name: "Raccourcisseur d'URL",
      description:
        "Application web pour le raccourcissement et la redirection de liens avec encodage Base62 pour générer des clés uniques et courtes",
      link: "https://github.com/Toudonou/url-shortener",
      skills: ["C#", ".NET", "HTML/CSS", "API REST"],
    },
    {
      name: "Huffman Encoding CLI",
      description:
        "Outil de compression de fichiers texte basé sur l'encodage entropique avec arbre binaire et réduction significative de taille",
      link: "https://github.com/Toudonou/huffman-encoding-cli",
      skills: ["Rust", "Compression", "Algorithmes"],
    },
  ],
  experience: [
    {
      company: "CGI Finance - SG",
      title: "Alternant Développeur Backend .NET",
      dateRange: "Septembre 2024 - Septembre 2026",
      bullets: [
        "Développement de services backend en .NET et .NET Core",
        "Maintien et évolution d'un espace client en production",
        "Migration et modernisation d'applications legacy",
        "Observabilité et supervision applicative avec DataDog",
        "Évolution dans un contexte Agile (SAFe)",
        "Écriture de documentation complète pour les systèmes applicatifs",
      ],
    },
  ],
  education: [
    {
      school: "École d'Ingénieur du Littoral Côte d'Opale (EILCO)",
      degree: "Formation d'Ingénieur en Informatique",
      dateRange: "2023 - 2026",
      details: [
        "Spécialité Intelligence Artificielle",
        "Alternance en tant que développeur backend .NET",
      ],
    },
    {
      school: "Institut de Mathématiques et de Sciences Physiques (IMSP)",
      degree: "Licence Informatique",
      dateRange: "2022 - 2023",
      details: ["Création d'une application de gestion de cours en PHP - Laravel"],
    },
    {
      school: "Institut de Mathématiques et de Sciences Physiques (IMSP)",
      degree: "Classes Préparatoires aux Grandes Écoles",
      dateRange: "2020 - 2022",
      details: ["MPSI"],
    },
  ],
};
