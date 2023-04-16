import React from 'react';
import useInput from '../hooks/use-input';
import AnimatedLetters from '../components/animation/AnimatedLetters';
import Sidebar from '../components/Sidebar';
import emailjs from '@emailjs/browser';
import './Contacts.scss';
import { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const isNotEmpty = value => value.trim() !== '';
const isEmail = value => value.includes('@');
const Contacts = () => {
  const form = useRef();
  const [succes, setSucces] = useState(false);
  console.log(succes);

  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetName,
  } = useInput(isNotEmpty);

  const {
    value: subjectValue,
    isValid: subjectIsValid,
    hasError: subjectHasError,
    valueChangeHandler: subjectChangeHandler,
    inputBlurHandler: subjectInputBlurHandler,
    reset: resetSubject,
  } = useInput(isNotEmpty);
  const {
    value: textValue,
    isValid: textIsValid,
    hasError: textHasError,
    valueChangeHandler: textChangeHandler,
    inputBlurHandler: textInputBlurHandler,
    reset: resetText,
  } = useInput(isNotEmpty);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  const formSubmissionHandler = e => {
    e.preventDefault();

    e.preventDefault();

    if (!formIsValid) return;
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        result => {
          setSucces(true);
          toast.success('Thanks for message!', {
            position: 'bottom-left',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          });
        },
        error => {
          toast.error(' Something went wrong', {
            position: 'bottom-left',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          });
        }
      );

    resetEmail();
    resetName();
    resetSubject();
    resetText();
  };
  let formIsValid = false;
  if (nameIsValid && emailIsValid && textIsValid && subjectIsValid) {
    formIsValid = true;
  }

  return (
    <>
      <Sidebar />
      <div className="contact-page">
        <AnimatedLetters text="Contact" />
        <div className="contact__page-form">
          <h2 className="contact__page-title">Contact me</h2>

          <form ref={form} onSubmit={formSubmissionHandler}>
            <div className="contact__page-name_email_container">
              <input
                onChange={nameChangeHandler}
                className={`contact__page-name_input ${
                  nameHasError && ' invalid'
                }`}
                name="user_name"
                type="text"
                placeholder="Name"
                value={nameValue}
                onBlur={nameInputBlurHandler}
              />
              <input
                className={`contact__page-email_input ${
                  emailHasError && ' invalid'
                }`}
                type="email"
                name="user_email"
                placeholder="Email"
                onChange={emailChangeHandler}
                value={emailValue}
                onBlur={emailInputBlurHandler}
              />
            </div>
            <input
              className={`contact__page-subject_input ${
                subjectHasError && ' invalid'
              }`}
              type="text"
              name="subject_name"
              placeholder="Subject"
              onChange={subjectChangeHandler}
              value={subjectValue}
              onBlur={subjectInputBlurHandler}
            />
            <textarea
              name="message"
              className={`contact__page-textarea ${textHasError && ' invalid'}`}
              placeholder="Message..."
              rows="6"
              onChange={textChangeHandler}
              value={textValue}
              onBlur={textInputBlurHandler}
            ></textarea>
            <button
              // onClick={notify}
              className="btn contact__page-submit"
              type="submit"
            >
              Send
            </button>
            <ToastContainer
              style={{ fontSize: '20px', color: 'black' }}
              position="bottom-center"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Contacts;
