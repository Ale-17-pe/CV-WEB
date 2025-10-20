import { cvData } from '../data/cvData';
import './stylePage/AboutPage.css';

export const AboutPage = () => {
    const { personalInfo, summary, skills } = cvData;

    return (
        <div className="about-container">
            <div className="about-header">
                <h1 className="about-title">Sobre Mí</h1>
                <div className="title-underline"></div>
            </div>

            <div className="about-content">
                {/* Tarjeta de Información Personal */}
                <div className="info-section">
                    <div className="section-header">
                        <h2 className="section-title">Información Personal</h2>
                        <div className="section-icon">👤</div>
                    </div>
                    <div className="personal-info-grid">
                        <div className="info-item">
                            <span className="info-label">Nombre</span>
                            <span className="info-value">{personalInfo.name}</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Ubicación</span>
                            <span className="info-value">{personalInfo.location}</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Email</span>
                            <a href={`mailto:${personalInfo.email}`} className="info-value link">
                                {personalInfo.email}
                            </a>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Teléfono</span>
                            <a href={`tel:${personalInfo.phone}`} className="info-value link">
                                {personalInfo.phone}
                            </a>
                        </div>
                    </div>
                </div>

                {/* Resumen Profesional */}
                <div className="info-section">
                    <div className="section-header">
                        <h2 className="section-title">Resumen Profesional</h2>
                        <div className="section-icon">💼</div>
                    </div>
                    <div className="summary-content">
                        {summary.map((paragraph, index) => (
                            <p key={index} className="summary-paragraph">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Habilidades Destacadas */}
                {skills && (
                    <div className="info-section">
                        <div className="section-header">
                            <h2 className="section-title">Habilidades Destacadas</h2>
                            <div className="section-icon">🚀</div>
                        </div>
                        <div className="skills-grid">
                            {skills.ciberseguridad && (
                                <div className="skill-category">
                                    <h4 className="skill-category-title">Ciberseguridad</h4>
                                    <div className="skill-tags">
                                        {skills.ciberseguridad.slice(0, 5).map((skill, index) => (
                                            <span key={index} className="skill-tag">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {skills.lenguajesYFrameworks && (
                                <div className="skill-category">
                                    <h4 className="skill-category-title">Tecnologías</h4>
                                    <div className="skill-tags">
                                        {skills.lenguajesYFrameworks.slice(0, 6).map((skill, index) => (
                                            <span key={index} className="skill-tag">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
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