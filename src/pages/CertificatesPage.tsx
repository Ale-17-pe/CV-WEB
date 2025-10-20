import { cvData } from '../data/cvData';
import './stylePage/CertificatesPage.css';

export const CertificatesPage = () => {
    const { certifications } = cvData;

    return (
        <div className="certificates-container">
            <div className="certificates-header">
                <h1 className="certificates-title">Certificados & Certificaciones</h1>
                <p className="certificates-subtitle">
                    Credenciales profesionales que validan mis conocimientos y habilidades en tecnología y ciberseguridad
                </p>
            </div>

            <div className="certificates-grid">
                {certifications.map((cert, index) => (
                    <div
                        key={cert.id}
                        className="cert-card"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <div className="cert-header">
                            <div className="cert-issuer">{cert.issuer}</div>
                            <div className="cert-badge">
                                <span className="badge-icon">🏆</span>
                            </div>
                        </div>

                        <h3 className="cert-title">{cert.title}</h3>

                        {cert.issueDate && (
                            <div className="cert-date">
                                <span className="date-icon">📅</span>
                                Emitido: {cert.issueDate}
                            </div>
                        )}

                        {cert.expirationDate && (
                            <div className="cert-expiry">
                                <span className="expiry-icon">⏰</span>
                                Expira: {cert.expirationDate}
                            </div>
                        )}

                        <div className="cert-actions">
                            <a
                                href={`/certificates/${cert.fileName}`}
                                className="download-btn"
                                download
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="btn-icon">📄</span>
                                Ver Certificado
                            </a>

                            {cert.credentialUrl && (
                                <a
                                    href={cert.credentialUrl}
                                    className="verify-btn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="btn-icon">🔗</span>
                                    Verificar
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Sección de estadísticas */}
            <div className="certificates-stats">
                <div className="stat-card">
                    <div className="stat-number">{certifications.length}+</div>
                    <div className="stat-label">Certificados</div>
                </div>
                <div className="stat-card">
                    <div className="stat-number">{new Set(certifications.map(c => c.issuer)).size}+</div>
                    <div className="stat-label">Instituciones</div>
                </div>
                <div className="stat-card">
                    <div className="stat-number">
                        {certifications.filter(c => !c.expirationDate || new Date(c.expirationDate) > new Date()).length}
                    </div>
                    <div className="stat-label">Vigentes</div>
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