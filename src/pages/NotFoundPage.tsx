import { Link } from 'react-router-dom';
import './stylePage/NotFoundPage.css'; // Crearemos este CSS

export const NotFoundPage = () => {
    return (
        <div className="not-found-container">
            <div className="not-found-content">
                <div className="error-code">
                    <span className="digit">4</span>
                    <span className="digit zero">0</span>
                    <span className="digit">4</span>
                </div>

                <h1 className="error-title">Página No Encontrada</h1>

                <p className="error-message">
                    La página que estás buscando no existe o ha sido movida.
                </p>

                <div className="terminal-effect">
                    <span className="command-prompt">$</span>
                    <span className="command"> find /page/you/looking/for</span>
                    <div className="command-output">Error 404: Page not found</div>
                </div>

                <Link to="/" className="home-button">
                    <span className="button-icon">⌂</span>
                    Volver al Inicio
                </Link>
            </div>

            <div className="background-effects">
                <div className="floating-particle particle-1"></div>
                <div className="floating-particle particle-2"></div>
                <div className="floating-particle particle-3"></div>
            </div>
        </div>
    );
};