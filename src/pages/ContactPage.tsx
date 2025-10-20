import React, { useState } from 'react';
import { cvData } from '../data/cvData';
import './stylePage/ContactPage.css';

export const ContactPage = () => {
  const { personalInfo } = cvData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
 try {
      const response = await fetch('https://formspree.io/f/xkgqekra', { 
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Limpia el formulario
      } else {
        // Formspree devuelve errores en el cuerpo de la respuesta
        const data = await response.json();
        console.error('Error de Formspree:', data);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error de red:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
      <h2>Contacto</h2>
      <p className="contact-intro">
        Si tienes alguna pregunta o quieres colaborar, no dudes en enviarme un mensaje.
      </p>
      
      <div className="contact-content">
        <div className="contact-details">
          <h3>Información de Contacto</h3>
          <p>
            <strong>Email:</strong> 
            <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
          </p>
          <p><strong>Teléfono:</strong> {personalInfo.phone}</p>
          <p><strong>Ubicación:</strong> {personalInfo.location}</p>
          <p>
            <strong>LinkedIn:</strong> 
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"> Visitar Perfil</a>
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Envíame un Mensaje</h3>
          
          {submitStatus === 'success' && (
            <div className="form-message success">
              ¡Mensaje enviado correctamente! Te responderé pronto.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="form-message error">
              Error al enviar el mensaje. Por favor, inténtalo de nuevo.
            </div>
          )}

          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Tu Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="btn-submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
          </button>
        </form>
      </div>
    </div>
  );
};  