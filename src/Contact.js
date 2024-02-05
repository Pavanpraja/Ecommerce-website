import React from "react";
import "./styles/App.css";
import "react-dom";
function Contact() {
  return (
    <>
      <section id="contact">
        <h1 className="h-primari1 center1">Contact Us</h1>
        <div id="contact-box">
          <form action="message.html">
            <div className="form-group">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Username"
                autoComplete="off"
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
                autoComplete="off"
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
                autoComplete="off"
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
                autoComplete="off"
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
                autoComplete="off"
                required
              ></textarea>
              <span
                id="confirmtextarea"
                className="text-danger form-weight-bold"
              ></span>
            </div>
            <div className="submit-btn0">
              <button type="submit" autoComplete="off">
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
