import React from 'react'
import '../styles/Contact.css'
function Contact() {
  return (
    <div>
      <section className='contact'>
        <div className='contact-content'>
          <h1>Contact Us</h1>
          <p>We would like to hear from you! Whether you have a question, need a quote, or just want to learn more about Mufat Farms, we're here to help. Get in touch with us below. </p>
          <form>
            <input type='text' placeholder='Name' />
            <input type='email' placeholder='Email' />
            <textarea placeholder="Message" rows="5" required></textarea>

            <button type='submit'>Submit</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact
