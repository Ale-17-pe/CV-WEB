// Pega este bloque corregido en la parte superior de tu archivo
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
        { id: 1, name: "React", category: "Frontend", level: "Básico", description: "Biblioteca para construir interfaces de usuario interactivas y modernas.", image: "/assets/imagenes/react.png", since: "2022" },
        { id: 10, name: "Angular", category: "Frontend", level: "Básico", description: "Framework para construir aplicaciones web robustas y escalables.", image: "/assets/imagenes/angular.png", since: "2022" },
        { id: 2, name: "JAVA", category: "Backend", level: "Intermedio", description: "Lenguaje robusto y versátil para aplicaciones empresariales y de alto rendimiento.", image: "/assets/imagenes/java.png", since: "2021" },
        { id: 3, name: "Python", category: "Lenguaje", level: "Avanzado", description: "Lenguaje versátil para desarrollo web, análisis de datos y automatización.", image: "/assets/imagenes/python.png", since: "2020" },
        { id: 4, name: "MongoDB", category: "Base de Datos", level: "Intermedio", description: "Base de datos NoSQL orientada a documentos para aplicaciones modernas.", image: "/assets/imagenes/mongo.png", since: "2021" },
        { id: 5, name: "TypeScript", category: "Lenguaje", level: "Intermedio", description: "Superset de JavaScript con tipado estático para un desarrollo más robusto.", image: "/assets/imagenes/typescript.png", since: "2022" },
        { id: 6, name: "Docker", category: "DevOps", level: "Intermedio", description: "Plataforma para desarrollar, enviar y ejecutar aplicaciones en contenedores.", image: "/assets/imagenes/docker.png", since: "2021" },
        { id: 7, name: "Git", category: "Herramientas", level: "Avanzado", description: "Sistema de control de versiones distribuido para la gestión de código.", image: "/assets/imagenes/git.png", since: "2020" },
        { id: 8, name: "JavaScript", category: "Lenguaje", level: "Avanzado", description: "El lenguaje de la web, esencial para el desarrollo frontend y backend.", image: "/assets/imagenes/javascript.png", since: "2020" },
        { id: 9, name: "MySQL", category: "Base de Datos", level: "Avanzado", description: "Sistema de gestión de bases de datos relacional de código abierto.", image: "/assets/imagenes/mysql.png", since: "2020" },
        { id: 11, name: "PostgreSQL", category: "Base de Datos", level: "Avanzado", description: "Sistema de gestión de bases de datos relacional orientado a objetos y de código abierto.", image: "/assets/imagenes/postgresql.png", since: "2020" }
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

            <div className="background-effects">
                <div className="floating-shape shape-1"></div>
                <div className="floating-shape shape-2"></div>
            </div>
        </div>
    );
};