// Pega este bloque corregido en la parte superior de tu archivo
import reactImage from '../assets/Imagenes/react.png';         // Correcto: 'r' minúscula
import angularImage from '../assets/Imagenes/angular.png';     // Correcto: 'a' minúscula
import javaImage from '../assets/Imagenes/java.png';         // Correcto: 'j' minúscula
import pythonImage from '../assets/Imagenes/python.png';       // Correcto: 'p' minúscula
import mongoImage from '../assets/Imagenes/mongo.png';       // Correcto: 'm' minúscula
import typescriptImage from '../assets/Imagenes/Typescript.png'; // Correcto: 'T' mayúscula
import dockerImage from '../assets/Imagenes/docker.png';       // Correcto: 'd' minúscula
import gitImage from '../assets/Imagenes/git.png';           // Correcto: 'g' minúscula
import javascriptImage from '../assets/Imagenes/JavaScript.png'; // Correcto: 'J' y 'S' mayúsculas
import mysqlImage from '../assets/Imagenes/MySQL.png';         // Correcto: 'M' 'S' 'Q' 'L' mayúsculas
import postgresqlImage from '../assets/Imagenes/PostgreSQL.png'; // Correcto: 'P' 'S' 'Q' 'L' mayúsculas

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
        { id: 1, name: "React", category: "Frontend", level: "Básico", description: "Biblioteca para construir interfaces de usuario interactivas y modernas.", image: reactImage, since: "2022" },
        { id: 10, name: "Angular", category: "Frontend", level: "Básico", description: "Framework para construir aplicaciones web robustas y escalables.", image: angularImage, since: "2022" },
        { id: 2, name: "JAVA", category: "Backend", level: "Intermedio", description: "Lenguaje robusto y versátil para aplicaciones empresariales y de alto rendimiento.", image: javaImage, since: "2021" },
        { id: 3, name: "Python", category: "Lenguaje", level: "Avanzado", description: "Lenguaje versátil para desarrollo web, análisis de datos y automatización.", image: pythonImage, since: "2020" },
        { id: 4, name: "MongoDB", category: "Base de Datos", level: "Intermedio", description: "Base de datos NoSQL orientada a documentos para aplicaciones modernas.", image: mongoImage, since: "2021" },
        { id: 5, name: "TypeScript", category: "Lenguaje", level: "Intermedio", description: "Superset de JavaScript con tipado estático para un desarrollo más robusto.", image: typescriptImage, since: "2022" },
        { id: 6, name: "Docker", category: "DevOps", level: "Intermedio", description: "Plataforma para desarrollar, enviar y ejecutar aplicaciones en contenedores.", image: dockerImage, since: "2021" },
        { id: 7, name: "Git", category: "Herramientas", level: "Avanzado", description: "Sistema de control de versiones distribuido para la gestión de código.", image: gitImage, since: "2020" },
        { id: 8, name: "JavaScript", category: "Lenguaje", level: "Avanzado", description: "El lenguaje de la web, esencial para el desarrollo frontend y backend.", image: javascriptImage, since: "2020" },
        { id: 9, name: "MySQL", category: "Base de Datos", level: "Avanzado", description: "Sistema de gestión de bases de datos relacional de código abierto.", image: mysqlImage, since: "2020" },
        { id: 11, name: "PostgreSQL", category: "Base de Datos", level: "Avanzado", description: "Sistema de gestión de bases de datos relacional orientado a objetos y de código abierto.", image: postgresqlImage, since: "2020" }
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