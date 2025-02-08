"use client";
import emailjs from '@emailjs/browser';
import { useRef , useState } from "react";
import ContactPopup from "../_elements/ContactPopup";


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_2nywz1i",
        "template_rfnl8e4",
        form.current,
        "WrfkVqS3rEtrUqB80"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          if (form.current) form.current.reset();
          setPopup(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
      
  };

      const [Popup , setPopup] = useState(false) 
      const openPopup = (() => setPopup(true))

  return (
    <>
    {Popup && <ContactPopup/>}
    <section className="py-10 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <p className="text-sm text-gray">
          If you wish to be contacted via email, please fill out the form below by entering your name, email address, and phone number. I will make sure to respond to your message promptly.
          </p>
          <div className="mt-8 flex justify-between text-secondary text-lg font-bold">
            <p>(+39) 350 577 0233</p>
            <p>(+41) 762 160 378</p>
          </div>
        </div>
        <div>
          <form ref={form} onSubmit={sendEmail} className="space-y-4 text-primary">
            <div>
              <label className="sr-only" htmlFor="name">
                Name
              </label>
              <input
                className="w-full p-3 text-sm border border-gray-300 rounded-lg bg-gray"
                placeholder="Name"
                type="text"
                name="from_name"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full p-3 text-sm border border-gray-300 rounded-lg bg-gray"
                  placeholder="Email address"
                  type="email"
                  name="email_from"
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="phone">
                  Phone
                </label>
                <input
                  className="w-full p-3 text-sm border border-gray-300 rounded-lg bg-gray"
                  placeholder="Phone Number"
                  type="tel"
                  name="phone"
                />
              </div>
            </div>
            <div>
              <label className="sr-only" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full p-3 text-sm border border-gray-300 rounded-lg bg-gray"
                placeholder="Message"
                rows="8"
                name="message"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-3 px-6 text-primary bg-secondary rounded-lg transition"
                onClick={openPopup}
              >
                Send email
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    </>
  );
};

export default Contact;
