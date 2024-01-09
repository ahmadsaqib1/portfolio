
import React, { useState } from 'react';

import { FaEnvelope, FaFilePdf, FaGithub, FaLinkedin } from 'react-icons/fa';

import "./Contact.css"


const Contact = () => {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form submitted:', { name, email, message });
    
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    
    <div className='contact'>
      <div className='left'>
        <p className='btn'>ahmadsaqib1@gmail.com<FaEnvelope /></p>
        
        <p className='btn'>
            <a href="https://github.com/ahmadsaqib1" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <FaGithub />
        </p>
        <p className='btn'>
          <a href="https://uk.linkedin.com/in/ahmadsaqib1" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <FaLinkedin />
        </p>
        <p className='btn'>
          <a href="https://github.com/ahmadsaqib1/resume/blob/main/AhmadSaqibCV.pdf" target="_blank" rel="noopener noreferrer">
            PDF version of CV
          </a>
          <FaFilePdf />
        </p>
      </div>

      {/* Contact Form */}
      <div className='right'>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <br />
        <label>
          Message:
          <input value={message} onChange={(e) => setMessage(e.target.value)} required />
        </label>
        <br />
        <button className="btn" type="submit">Submit</button>
      </form>
      </div>
    </div>
  );
};


export default Contact;
