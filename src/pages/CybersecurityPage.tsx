import './stylePage/CybersecurityPage.css';

interface CybersecurityTool {
    id: number;
    name: string;
    category: string;
    description: string;
    image: string;
    features: string[];
    useCase: string;
}

export const CybersecurityPage = () => {
    const cybersecurityTools: CybersecurityTool[] = [
        {
            id: 1,
            name: "Wireshark",
            category: "Análisis de Red",
            description: "Analizador de protocolos de red para troubleshooting y análisis de seguridad",
            image: "src/assets/Imagenes/Wireshark.png",
            features: ["Análisis de paquetes", "Inspección profunda", "Filtrado avanzado"],
            useCase: "Detección de anomalías en red"
        },
        {
            id: 2,
            name: "Metasploit",
            category: "Pentesting",
            description: "Framework de testing de penetración para desarrollo y ejecución de exploits",
            image: "src/assets/Imagenes/metasploit.png",
            features: ["Exploit development", "Vulnerability scanning", "Payload generation"],
            useCase: "Evaluación de vulnerabilidades"
        },
        {
            id: 3,
            name: "Nmap",
            category: "Escaneo de Red",
            description: "Herramienta de descubrimiento de red y auditoría de seguridad",
            image: "src/assets/Imagenes/nmap.png",
            features: ["Port scanning", "OS detection", "Service version detection"],
            useCase: "Reconocimiento de red"
        },
        {
            id: 4,
            name: "Burp Suite",
            category: "Web Security",
            description: "Plataforma integral para testing de seguridad de aplicaciones web",
            image: "src/assets/Imagenes/burp.png",
            features: ["Web vulnerability scanning", "Intercepting proxy", "Automated testing"],
            useCase: "Auditoría web applications"
        }
    ];

    const categories = [...new Set(cybersecurityTools.map(tool => tool.category))];

    return (
        <div className="cybersecurity-container">
            <div className="cyber-header">
                <h1 className="cyber-title">Ciberseguridad</h1>
                <p className="cyber-subtitle">Herramientas y tecnologías de seguridad informática</p>
            </div>

            <div className="cyber-categories">
                {categories.map(category => (
                    <div key={category} className="cyber-category">
                        <h2 className="category-title">{category}</h2>
                        <div className="cyber-tools">
                            {cybersecurityTools
                                .filter(tool => tool.category === category)
                                .map(tool => (
                                    <div key={tool.id} className="cyber-tool-card">
                                        <div className="tool-image">
                                            {tool.image ? (
                                                <img src={tool.image} alt={tool.name} />
                                            ) : (
                                                <div className="tool-placeholder">
                                                    {tool.name.charAt(0)}
                                                </div>
                                            )}
                                        </div>
                                        <div className="tool-content">
                                            <h3 className="tool-name">{tool.name}</h3>
                                            <p className="tool-description">{tool.description}</p>
                                            <div className="tool-features">
                                                <h4>Características:</h4>
                                                <ul>
                                                    {tool.features.map((feature, index) => (
                                                        <li key={index}>{feature}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="tool-use-case">
                                                <strong>Caso de uso:</strong> {tool.useCase}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))}
            </div>

            {/* Sección de metodologías */}
            <div className="methodologies-section">
                <h2>Metodologías de Seguridad</h2>
                <div className="methodologies-grid">
                    <div className="methodology-card">
                        <h3>OWASP Top 10</h3>
                        <p>Conocimiento en las principales vulnerabilidades web según OWASP</p>
                    </div>
                    <div className="methodology-card">
                        <h3>NIST Framework</h3>
                        <p>Implementación de marcos de seguridad basados en estándares NIST</p>
                    </div>
                    <div className="methodology-card">
                        <h3>ISO 27001</h3>
                        <p>Conocimiento en estándares de gestión de seguridad de la información</p>
                    </div>
                </div>
            </div>
        </div>
    );
};