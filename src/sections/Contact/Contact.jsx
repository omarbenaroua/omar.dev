import './Contact.css';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_2nywz1i', 'template_6cny90c', form.current, 'WrfkVqS3rEtrUqB80')
      .then((result) => {
        console.log(result.text);
        console.log('message sent');
        window.location.reload();
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section>
      <div className="container">
        <div className="text-container">
          <p className="info-text">
            If you would like to be contacted via email, please send us a brief message by filling out the form below 
            with your name, email address, and phone number. I will make sure to get back to you as soon as possible.
          </p>
          <div className="contact-info">
            <p className="phone-number">(+39) 350 577 0233</p>
            <p className="phone-number">(+41) 762 160 378</p>
          </div>
        </div>
        <div className="form-container">
          <form className="form" ref={form} onSubmit={sendEmail}>
            <div>
              <label className="sr-only" htmlFor="name">Name</label>
              <input
                className="input-field"
                placeholder="Name"
                type="text"
                name="from_name"
              />
            </div>
            <div className="input-group">
              <div>
                <label className="sr-only" htmlFor="email">Email</label>
                <input
                  className="input-field"
                  placeholder="Email address"
                  type="email"
                  name="email_from"
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="phone">Phone</label>
                <input
                  className="input-field"
                  placeholder="Phone Number"
                  type="tel"
                  name="phone"
                />
              </div>
            </div>
            <div>
              <label className="sr-only" htmlFor="message">Message</label>
              <textarea
                className="input-field"
                placeholder="Message"
                rows="8"
                name="message"
              ></textarea>
            </div>
            <div className="submit-container">
              <button
                type="submit"
                className="submit-button"
                onSubmit={sendEmail}
              >
                Send email
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
