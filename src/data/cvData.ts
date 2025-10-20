
export const cvData = {
  personalInfo: {
    name: "FABRIZIO GALLARDO",
    title: "Ingeniería de Sistemas | Ciberseguridad | Desarrollo de Software",
    email: "f.alexandrogallardoq@gmail.com",
    phone: "+51 904 164 569",
    linkedin: "https://linkedin.com/in/alexandro-gallardo-quiroz",
    location: "Lima, Perú"
  },
  summary: [
    "Ingeniero de Sistemas en formación con especialización en ciberseguridad y experiencia en el desarrollo de proyectos individuales y académicos aplicados.",
    "Certificado en Ethical Hacking (C|EH) y CyberSOC Analyst (C|CS), con competencias en análisis de vulnerabilidades y seguridad ofensiva.",
    "Capacidad para diseñar, desarrollar e implementar soluciones tecnológicas bajo metodologías modernas, con arquitecturas necesarias.",
    "Enfocado en la innovación, la mejora continua y la aplicación de buenas prácticas de ingeniería de sistemas e informática."
  ],
  education: [
    {
      id: 1,
      institution: "Universidad Tecnológica del Perú (UTP)",
      degree: "Ingeniería de Sistemas",
      period: "2021 - En curso (7mo ciclo)"
    }
  ],
  projects: [
        {
            id: 1,
            title: "Automatización de sistema",
            description: "Plataforma completa membresías y asistencias ",
            image: "/src/Imagenes/Logo.png",
            details: [
                "Dashboard en tiempo real",
                "Sistema de alertas automáticas",
                "Reportes detallados de Membresias"
            ],
            technologies: ["React", "Java", "PostgreSQL", "Sping-boot"],
            demoUrl: "web",
            githubUrl: "githud.com",
            documentationUrl: "documentos",
            status: "Proceso",

            arquitectura: [
                "Microservicios",
                "API Gateway",
                "Base de Datos Distribuida",
                "Autenticación JWT"
            ],
            arquitecturaDiagrama: "/diagrams/architecture-diagram.pdf" // opcional
        }
    ],
  certifications: [
        {
            id: 1,
            issuer: "Google",
            title: "Google Cybersecurity Professional Certificate",
            fileName: "google-cybersecurity.pdf",
            issueDate: "Enero 2024",
            expirationDate: "Enero 2027",
            credentialUrl: "https://www.credly.com/badges/..."
        }
  ],
  skills: {
    ciberseguridad: ["Ethical Hacking", "SOC Monitoring", "Análisis de vulnerabilidades"],
    lenguajesYFrameworks: ["Java", "Spring Boot", "JSP", "Thymeleaf", "HTML", "CSS", "JavaScript"],
    basesDeDatos: ["MySQL", "H2 Database", "SQL Server"],
    arquitecturaYMetodologias: ["MVC", "DAO", "Microservicios", "Arquitectura en Capas"],
    herramientas: ["Git", "GitHub", "IntelliJ IDEA", "VS Code"],
    softSkills: ["Responsabilidad", "Trabajo en equipo", "Disciplina", "Comunicación efectiva"]
  }
};