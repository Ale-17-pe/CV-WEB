// MainLayout.tsx
import { NavLink, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './styles/MainLayout.css';;

export const MainLayout = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="layout-container">
            <header className={`main-header ${scrolled ? 'scrolled' : ''}`}>
                <div className="logo">
                    <NavLink to="/">Fabrizio Gallardo</NavLink>
                </div>
                <nav className="main-nav">
                    <NavLink to="/about">Sobre Mí</NavLink>
                    <NavLink to="/portfolio">Portafolio</NavLink>
                    <NavLink to="/technologies">Tecnologías</NavLink>
                    <NavLink to="/cybersecurity">Ciberseguridad</NavLink>
                    <NavLink to="/certificates">Certificados</NavLink>
                    <NavLink to="/contact">Contacto</NavLink>
                </nav>
            </header>
            <main className="content-area">
                <Outlet />
            </main>
            <footer className="main-footer">
                <div className="footer-content">
                    <p>&copy; 2024 Fabrizio Gallardo. Ingeniero de Sistemas & Ciberseguridad</p>
                    <div className="footer-links">
                        <a href="mailto:tu-email@dominio.com">Email</a>
                        <a href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};