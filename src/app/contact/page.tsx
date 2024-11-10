import React from 'react'

const Contact = () => {
  return (
<section id='contact-section'>
        
<div className="contact-container">
      <h1 id='contact-heading'>Contact Us</h1>
      <p>We’&apos;d love to hear from you! Please fill out the form below.</p>
      <form className="contact-form">
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Message:
          <textarea name="message" required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
</section>

  
    
  )
}

export default Contact