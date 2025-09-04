import React, { useState } from 'react';
import './ContactPage.css'
import { ContactForm } from '../types/Contact';

const ContactPage = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    interestedIn: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // TODO: Later we'll connect this to your backend API
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h2>Thank You!</h2>
        <p>We've received your inquiry and will contact you within 24 hours.</p>
        <button 
          onClick={() => setSubmitted(false)}
          style={{
            background: '#27ae60',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="contact-page">
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1>Contact Us</h1>
        <p>Ready to make 740 West Fulton your new home?</p>
      </header>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '50px',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        <div>
          <h3>Get in Touch</h3>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleInputChange}
              required
              style={{
                padding: '12px',
                borderRadius: '6px',
                border: '1px solid #ddd',
                fontSize: '16px'
              }}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              required
              style={{
                padding: '12px',
                borderRadius: '6px',
                border: '1px solid #ddd',
                fontSize: '16px'
              }}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              style={{
                padding: '12px',
                borderRadius: '6px',
                border: '1px solid #ddd',
                fontSize: '16px'
              }}
            />

            <select
              name="interestedIn"
              value={formData.interestedIn}
              onChange={handleInputChange}
              required
              style={{
                padding: '12px',
                borderRadius: '6px',
                border: '1px solid #ddd',
                fontSize: '16px'
              }}
            >
              <option value="">I'm interested in...</option>
              <option value="1bed">1 Bedroom Units</option>
              <option value="2bed">2 Bedroom Units</option>
              <option value="3bed">3 Bedroom Units</option>
              <option value="tour">Scheduling a Tour</option>
              <option value="general">General Information</option>
            </select>

            <textarea
              name="message"
              placeholder="Tell us more about what you're looking for..."
              value={formData.message}
              onChange={handleInputChange}
              rows={5}
              style={{
                padding: '12px',
                borderRadius: '6px',
                border: '1px solid #ddd',
                fontSize: '16px',
                resize: 'vertical'
              }}
            />

            <button
              type="submit"
              style={{
                background: '#27ae60',
                color: 'white',
                border: 'none',
                padding: '15px',
                borderRadius: '6px',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Send Message
            </button>
          </form>
        </div>

        <div>
          <h3>Visit Us</h3>
          <div style={{ marginBottom: '30px' }}>
            <p><strong>Address:</strong><br />
            740 West Fulton Street<br />
            Chicago, IL 60661</p>
            
            <p><strong>Leasing Office Hours:</strong><br />
            Monday - Friday: 9:00 AM - 6:00 PM<br />
            Saturday: 10:00 AM - 5:00 PM<br />
            Sunday: 12:00 PM - 4:00 PM</p>
            
            <p><strong>Phone:</strong> (312) 555-5555<br />
            <strong>Email:</strong> 740Fulton@fsresidential.com</p>
          </div>

          <div style={{
            height: '250px',
            background: '#f0f0f0',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#666'
          }}>
            [Interactive Map Here]
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;