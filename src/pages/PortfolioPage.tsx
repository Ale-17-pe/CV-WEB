import { cvData } from '../data/cvData';
import './stylePage/PortfolioPage.css';

export const PortfolioPage = () => {
    const { projects } = cvData;

    return (
        <div className="portfolio-container">
            <div className="portfolio-header">
                <h1 className="portfolio-title">Portafolio de Proyectos</h1>
                <p className="portfolio-subtitle">
                    Una colección de mis trabajos más destacados en desarrollo de software y ciberseguridad
                </p>
            </div>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className="project-card"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <div className="project-header">
                            <h3 className="project-title">{project.title}</h3>
                            <div className="project-badge">
                                <span className="badge-icon">🚀</span>
                            </div>
                        </div>

                        <div className="project-image">
                                {project.image && project.image.startsWith('/') ? (
                                <img src={project.image} alt={project.title}
                                     onError={(e) => {
                                         e.currentTarget.style.display = 'none';
                                     }}/>
                            ) : null}
                                <div className="project-placeholder" style={{
                                    display: project.image && project.image.startsWith('/') ? 'none' : 'flex'
                                }}>
                                    <span className="placeholder-icon">💻</span>
                                    <span className="placeholder-text">Preview del Proyecto</span>
                                </div>
                        </div>

                        <div className="project-content">
                            <div className="project-description">
                                <p>{project.description}</p>
                            </div>

                            <div className="project-details">
                                <h4>Características Principales:</h4>
                                <ul>
                                    {project.details.map((detail, index) => (
                                        <li key={index}>{detail}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="project-tech">
                                <h4>Tecnologías Utilizadas:</h4>
                                <div className="tech-tags">
                                    {project.technologies.map(tech => (
                                        <span key={tech} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="project-links">
                                <div className="project-content">
                                    {/* Descripción */}
                                    <div className="project-description">
                                        <p>{project.description}</p>
                                    </div>

                                    {project.arquitectura && (
                                        <div className="project-architecture">
                                            <h4>Arquitectura:</h4>
                                            <div className="architecture-tags">
                                                {project.arquitectura.map((arch, index) => (
                                                    <span key={index} className="architecture-tag">{arch}</span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    <div className="project-details">
                                        <h4>Características Principales:</h4>
                                        <ul>
                                            {project.details.map((detail, index) => (
                                                <li key={index}>{detail}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="project-tech">
                                        <h4>Tecnologías Utilizadas:</h4>
                                        <div className="tech-tags">
                                            {project.technologies.map(tech => (
                                                <span key={tech} className="tech-tag">{tech}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="project-links">
                                        {project.demoUrl && (
                                            <a
                                                href={project.demoUrl}
                                                className="project-link demo-link"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <span className="link-icon">🌐</span>
                                                Ver Demo
                                            </a>
                                        )}
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                className="project-link github-link"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <span className="link-icon">💻</span>
                                                Código Fuente
                                            </a>
                                        )}
                                        {project.arquitecturaDiagrama && (
                                            <a
                                                href={project.arquitecturaDiagrama}
                                                className="project-link arch-link"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <span className="link-icon">📐</span>
                                                Ver Diagrama
                                            </a>
                                        )}
                                        {project.documentationUrl && (
                                            <a
                                                href={project.documentationUrl}
                                                className="project-link docs-link"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <span className="link-icon">📚</span>
                                                Documentación
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {project.status && (
                                <div className={`project-status ${project.status.toLowerCase()}`}>
                                    <span className="status-indicator"></span>
                                    Estado: {project.status}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Sección de estadísticas */}
            <div className="portfolio-stats">
                <div className="stat-card">
                    <div className="stat-number">{projects.length}+</div>
                    <div className="stat-label">Proyectos</div>
                </div>
                <div className="stat-card">
                    <div className="stat-number">
                        {new Set(projects.flatMap(p => p.technologies)).size}+
                    </div>
                    <div className="stat-label">Tecnologías</div>
                </div>
                <div className="stat-card">
                    <div className="stat-number">
                        {projects.filter(p => p.status === 'Completado').length}
                    </div>
                    <div className="stat-label">Completados</div>
                </div>
                <div className="stat-card">
                    <div className="stat-number">
                        {projects.filter(p => p.demoUrl).length}
                    </div>
                    <div className="stat-label">En Vivo</div>
                </div>
            </div>

            {/* Efectos de fondo */}
            <div className="background-effects">
                <div className="floating-shape shape-1"></div>
                <div className="floating-shape shape-2"></div>
                <div className="floating-shape shape-3"></div>
            </div>
        </div>
    );
};