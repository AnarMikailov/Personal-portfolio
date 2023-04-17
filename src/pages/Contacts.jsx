import React from "react";
import AnimatedLetters from "../components/animation/AnimatedLetters";
import Sidebar from "../components/Sidebar";
import "./Contacts.scss";
const Contacts = () => {
  return (
    <>
      <Sidebar />
      <div className="contact-page">
        <AnimatedLetters text="Contact" />
        <div className="contact__page-form">
          <form>
            <div className="contact__page-name_email_container">
              <input
                className="contact__page-name_input"
                type="text"
                placeholder="Name"
                required
              />
              <input
                className="contact__page-email_input"
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <input
              className="contact__page-subject_input"
              type="text"
              required
              placeholder="Subject"
            />
            <textarea
              className="contact__page-textarea"
              placeholder="Message.."
              rows="6"
            ></textarea>
            <button className="btn contact__page-submit" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contacts;
