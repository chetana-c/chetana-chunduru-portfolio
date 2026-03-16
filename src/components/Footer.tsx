import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2024 Chetana. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:your.email@example.com">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;