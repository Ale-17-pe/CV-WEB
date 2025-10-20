// src/routes/AppRouter.tsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { CertificatesPage } from '../pages/CertificatesPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { PortfolioPage } from '../pages/PortfolioPage';
import { TechnologiesPage } from '../pages/TechnologiesPage';
import { CybersecurityPage } from '../pages/CybersecurityPage'; 
import { ContactPage } from '../pages/ContactPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: 'about', element: <AboutPage /> },
            { path: 'portfolio', element: <PortfolioPage /> },
            { path: 'technologies', element: <TechnologiesPage /> },
            { path: 'cybersecurity', element: <CybersecurityPage /> },
            { path: 'certificates', element: <CertificatesPage /> },
            { path: 'contact', element: <ContactPage /> },
            { path: '*', element: <NotFoundPage /> }
        ]
    }
]);

export const AppRouter = () => {
    return <RouterProvider router={router} />;
};