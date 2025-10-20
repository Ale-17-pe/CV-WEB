import './styleComponents/Header.css';

interface HeaderProps {
  name: string;
  title: string;
  contact: {
    email: string;
    phone: string;
    linkedin: string;
    location: string;
  };
}

const Header = ({ name, title, contact }: HeaderProps) => {
  return (
    <header className="header-container">
      {/* Partículas de fondo */}
      <div className="particle particle-1"></div>
      <div className="particle particle-2"></div>
      <div className="particle particle-3"></div>
      
      <h1>{name}</h1>
      <p className="header-title">{title}</p>
      <div className="contact-info">
        <span>{contact.location}</span>
        <span>•</span>
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
        <span>•</span>
        <span>{contact.phone}</span>
        <span>•</span>
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </header>
  );
};

export default Header;