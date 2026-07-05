import React, { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Action framework placeholder for later deployment
    console.log("Form Data Submitted safely:", formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ width: '100%', padding: '2rem 0' }}>
      {/* Header Container */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div className="plush-badge">SAY HELLO</div>
        <h2 className="glow-title" style={{ fontSize: '2.5rem' }}>Custom Orders</h2>
        <div className="script-sub" style={{ fontSize: '2.2rem', marginTop: '5px' }}>
          Let's spin something together
        </div>
      </div>

      {/* Modern Card Frame Container */}
      <div className="premium-contact-card">
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          
          {/* 1. NAME FIELD */}
          <div className={`premium-form-group ${focusedField === 'name' || formData.name ? 'active' : ''}`}>
            <label className="premium-label">YOUR NAME</label>
            <div className="input-wrapper">
              <span className="input-icon">👤</span>
              <input 
                type="text" 
                name="name"
                className="premium-input" 
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                required 
              />
            </div>
          </div>

          {/* 2. EMAIL FIELD */}
          <div className={`premium-form-group ${focusedField === 'email' || formData.email ? 'active' : ''}`}>
            <label className="premium-label">EMAIL ADDRESS</label>
            <div className="input-wrapper">
              <span className="input-icon">✉️</span>
              <input 
                type="email" 
                name="email"
                className="premium-input" 
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                required 
              />
            </div>
          </div>

          {/* 3. MESSAGE BOX */}
          <div className={`premium-form-group ${focusedField === 'message' || formData.message ? 'active' : ''}`}>
            <label className="premium-label">PROJECT DETAILS</label>
            <div className="input-wrapper" style={{ alignItems: 'flex-start', paddingTop: '12px' }}>
              <span className="input-icon">🧶</span>
              <textarea 
                name="message"
                className="premium-input premium-textarea" 
                rows="5"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                required 
              />
            </div>
          </div>

          {/* SUBMIT TRUCK */}
          <button type="submit" className="btn-magical submit-btn-stretched">
            SEND COMMISSION REQUEST
          </button>

        </form>
      </div>
    </div>
  );
}