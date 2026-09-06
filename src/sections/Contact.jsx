import { useState } from "react";
import "../styles/contact.css";


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setFormMessage({ 
        type: 'success', 
        text: 'Thank you for your message! I\'ll get back to you soon.' 
      });
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Clear message after 5 seconds
      setTimeout(() => setFormMessage({ type: '', text: '' }), 5000);
    }, 1500);
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      info: "anujbhalerao3@gmail.com",
      link: "mailto:anujbhalerao3@gmail.com"
    },
    {
      icon: "📱",
      title: "Phone",
      info: "+91 6260422196",
      link: "tel:+916260422196"
    },
    {
      icon: "📍",
      title: "Location",
      info: "Indore, Madhya Pradesh, India",
      link: "https://maps.google.com/?q=Indore,Madhya+Pradesh,India"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      info: "Connect with me",
      link: "https://www.linkedin.com/in/anuj-bhalerao-8b8a951ba/"
    },

    {
      icon: "🚀",
      title: "GitHub",
      info: "github.com/anujbhalerao",
      link: "https://github.com/anujbhalerao"
    }
  ];

  const socialLinks = [
    { icon: "💼", link: "https://linkedin.com/in/anuj-bhalerao", label: "LinkedIn" },
    { icon: "🐙", link: "https://github.com/anuj", label: "GitHub" },
    { icon: "🐦", link: "https://twitter.com/anuj_dev", label: "Twitter" },
    { icon: "📸", link: "https://instagram.com/anuj_codes", label: "Instagram" }
  ];

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        {/* Contact Information */}
        <div className="contact-info">
          <div className="contact-header">
            <h2>Let's Connect</h2>
            <p className="contact-subtitle">
              Ready to bring your ideas to life? I'm always excited to work on 
              new projects and collaborate with fellow developers. Let's discuss 
              how we can create something amazing together!
            </p>
          </div>

          <div className="contact-methods">
            {contactMethods.map((method, index) => (
              <div key={index} className="contact-method" onClick={() => window.open(method.link, '_blank')}>
                <div className="contact-icon">
                  {method.icon}
                </div>
                <div className="contact-method-info">
                  <h4>{method.title}</h4>
                  <p>
                    {method.link.startsWith('mailto:') || method.link.startsWith('tel:') ? (
                      <a href={method.link}>{method.info}</a>
                    ) : (
                      method.info
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="social-links">
            {socialLinks.map((social, index) => (
              <a 
                key={index} 
                href={social.link} 
                className="social-link"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div> */}
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <div className="form-header">
            <h3>Send a Message</h3>
            <p>Have a project in mind? Drop me a line!</p>
          </div>

          {formMessage.text && (
            <div className={`form-message ${formMessage.type}`}>
              {formMessage.text}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or idea..."
                rows="5"
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
// more information will be added soon
