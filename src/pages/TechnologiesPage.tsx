// src/pages/TechnologiesPage.tsx
import './stylePage/TechnologiesPage.css';

interface Technology {
    id: number;
    name: string;
    category: string;
    level: 'Básico' | 'Intermedio' | 'Avanzado';
    description: string;
    image: string;
    since: string;
}

export const TechnologiesPage = () => {
    const technologies: Technology[] = [
        {
            id: 1,
            name: "React",
            category: "Frontend",
            level: "Básico",
            description: "Biblioteca de JavaScript para construir interfaces de usuario interactivas y modernas",
            image: "src/assets/Imagenes/react.png",
            since: "2022"
        },
        
        {
            id: 10,
            name: "Angular",
            category: "Frontend",
            level: "Básico",
            description: "Biblioteca de JavaScript para construir interfaces de usuario interactivas y modernas",
            image: "src/assets/Imagenes/angular.png",
            since: "2022"
        },

         
        {
            id: 2,
            name: "JAVA",
            category: "Backend",
            level: "Intermedio",
            description: "Entorno de ejecución para JavaScript del lado del servidor, ideal para APIs y aplicaciones escalables",
            image: "src/assets/Imagenes/java.png",
            since: "2021"
        },
        {
            id: 3,
            name: "Python",
            category: "Lenguaje",
            level: "Avanzado",
            description: "Lenguaje de programación versátil para desarrollo web, análisis de datos y automatización",
            image: "src/assets/Imagenes/python.png",
            since: "2020"
        },
        {
            id: 4,
            name: "MongoDB",
            category: "Base de Datos",
            level: "Intermedio",
            description: "Base de datos NoSQL orientada a documentos para aplicaciones modernas y escalables",
            image: "src/assets/Imagenes/mongo.png",
            since: "2021"
        },
        {
            id: 5,
            name: "TypeScript",
            category: "Lenguaje",
            level: "Intermedio",
            description: "Superset de JavaScript que añade tipado estático para desarrollo más robusto y mantenible",
            image: "src/assets/Imagenes/typescript.png",
            since: "2022"
        },
        {
            id: 6,
            name: "Docker",
            category: "DevOps",
            level: "Intermedio",
            description: "Plataforma para desarrollar, enviar y ejecutar aplicaciones en contenedores",
            image: "src/assets/Imagenes/docker.png",
            since: "2021"
        },
        {
            id: 7,
            name: "Git",
            category: "Herramientas",
            level: "Avanzado",
            description: "Sistema de control de versiones distribuido para gestión eficiente de proyectos de software",
            image: "src/assets/Imagenes/git.png",
            since: "2020"
        },
        {
            id: 8,
            name: "JavaScript",
            category: "Lenguaje",
            level: "Avanzado",
            description: "Lenguaje de programación para desarrollo web frontend y backend con Node.js",
            image: "src/assets/Imagenes/javaScript.png",
            since: "2020"
        }
        ,
        {
            id: 9,
            name: "MySQL",
            category: "Base de Datos",
            level: "Avanzado",
            description: "Lenguaje de programación para desarrollo web frontend y backend con Node.js",
            image: "src/assets/Imagenes/MySQL.png",
            since: "2020"
        },
        {
            id: 11,
            name: "PostgreSQL",
            category: "Base de Datos",
            level: "Avanzado",
            description: "Lenguaje de programación para desarrollo web frontend y backend con Node.js",
            image: "src/assets/Imagenes/PostgreSQL.png",
            since: "2020"
        }
    ];

    const categories = [...new Set(technologies.map(tech => tech.category))];

    return (
        <div className="technologies-container">
            <div className="tech-header">
                <h1 className="tech-title">Tecnologías & Herramientas</h1>
                <p className="tech-subtitle">Stack tecnológico y herramientas que utilizo en mis proyectos</p>
            </div>

            {/* Lista de tecnologías por categoría */}
            <div className="tech-categories">
                {categories.map(category => (
                    <div key={category} className="tech-category">
                        <h2 className="category-title">{category}</h2>
                        <div className="tech-grid">
                            {technologies
                                .filter(tech => tech.category === category)
                                .map(tech => (
                                    <div key={tech.id} className="tech-card">
                                        <div className="tech-image">
                                            {tech.image ? (
                                                <img src={tech.image} alt={tech.name} />
                                            ) : (
                                                <div className="tech-placeholder">
                                                    {tech.name.charAt(0)}
                                                </div>
                                            )}
                                        </div>
                                        <div className="tech-content">
                                            <h3 className="tech-name">{tech.name}</h3>
                                            <span className={`tech-level ${tech.level.toLowerCase()}`}>
                                                {tech.level}
                                            </span>
                                            <p className="tech-description">{tech.description}</p>
                                            <div className="tech-meta">
                                                <span>Experiencia desde: {tech.since}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))}
            </div>

            {/* Efectos de fondo */}
            <div className="background-effects">
                <div className="floating-shape shape-1"></div>
                <div className="floating-shape shape-2"></div>
            </div>
        </div>
    );
};