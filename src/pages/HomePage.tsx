import { Link } from 'react-router-dom';
import './stylePage/HomePage.css';

export const HomePage = () => {
    return (
        <div className="home-container">
            <div className="home-content">
                <h1 className="home-title">Fabrizio Gallardo</h1>
                <p className="home-subtitle">
                    Ingeniero de Sistemas, especialista en Ciberseguridad y Desarrollador de Software
                </p>
                <div className="home-cta-buttons">
                    <Link to="/portfolio" className="btn btn-primary">Ver Proyectos</Link>
                    <Link to="/about" className="btn btn-secondary">Sobre Mí</Link>
                </div>
            </div>
        </div>
    );
};