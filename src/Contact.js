import React from "react";
import './styles/App.css'
import Header from "./components/Header";
import 'react-dom';
function Contact() {

  return (
    <>
      <Header />
      <section id="contact">
        <h1 className="h-primari1 center1">Contact Us</h1>
        <div id="contact-box">
          <form action="message.html" onsubmit="return validation()">
            <div className="form-group">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Username"
                autocomplete="off"
                required
              />
              <span
                id="username"
                className="text-danger form-weight-bold"
              ></span>
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                autocomplete="off"
                required
              />
              <span
                id="confirmemail"
                className="text-danger form-weight-bold"
              ></span>
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="Phone"
                id="Phone"
                placeholder="Phone-number"
                autocomplete="off"
                required
              />
              <span
                id="confirmnumber"
                className="text-danger form-weight-bold"
              ></span>
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="Phonec"
                id="Phonec"
                placeholder="Confirm-Phone-number"
                autocomplete="off"
                required
              />
              <span
                id="confirmnumberc"
                className="text-danger form-weight-bold"
              ></span>
            </div>
            <div className="form-group">
              <textarea
                type="text"
                name="name"
                id="textarea"
                cols="30"
                rows="10"
                placeholder="About yourself..."
                autocomplete="off"
                required
              ></textarea>
              <span
                id="confirmtextarea"
                className="text-danger form-weight-bold"
              ></span>
            </div>
            <div className="submit-btn0">
              <button type="submit" autocomplete="off">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
