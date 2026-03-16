import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <p className="contact-intro">
          +1 (984) 683-3977 | cchetana357@gmail.com | Raleigh, NC
        </p>
        <p className="contact-intro">
          I'm always open to new opportunities in Data Engineering, ML, and Cloud solutions. Feel free to reach out!
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <FiMail className="icon" />
              <div>
                <h4>Email</h4>
                <a href="mailto:cchetana357@gmail.com">cchetana357@gmail.com</a>
              </div>
            </div>
            <div className="info-item">
              <FiPhone className="icon" />
              <div>
                <h4>Phone</h4>
                <a href="tel:+19846833977">+1 (984) 683-3977</a>
              </div>
            </div>
            <div className="info-item">
              <FiMapPin className="icon" />
              <div>
                <h4>Location</h4>
                <p>Raleigh, NC</p>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows={5} required></textarea>
              </div>
              <button type="submit" className="btn-submit">Send Message</button>
            </form>

            <div className="social-links">
              <h4>Connect With Me</h4>
              <div className="social-icons">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub">
                  <FiGithub />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                  <FiLinkedin />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
                  <FiTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
