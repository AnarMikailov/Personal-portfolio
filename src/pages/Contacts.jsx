import React from "react";
import useInput from "../hooks/use-input";
import AnimatedLetters from "../components/animation/AnimatedLetters";
import Sidebar from "../components/Sidebar";
import emailjs from "@emailjs/browser";
import "./Contacts.scss";
import { useRef, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import L from "leaflet";
import RingLoader from "react-spinners/RingLoader";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");
const Contacts = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  const customIcon = L.icon({
    iconUrl: "https://static.thenounproject.com/png/2931149-200.png",
    iconSize: [40, 41],
  });
  const form = useRef();
  const position = [40.45632030927407, 49.943334484661165];

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

  const formSubmissionHandler = (e) => {
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
        (result) => {
          toast.success("Thanks for message!", {
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        },
        (error) => {
          toast.error(" Something went wrong", {
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
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
      {loading ? (
        <RingLoader
          color="#ffd43b"
          loading
          size={60}
          cssOverride={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          speedMultiplier={2}
        />
      ) : (
        <>
          <Sidebar />
          <div className="contact-page">
            <AnimatedLetters text="Contact" />
            <div className="contact_page-container">
              <div className="contact__page-form">
                <h2 className="contact__page-title">
                  Contact me for your front-end development needs and let's
                  discuss <br />
                  how I can help you bring your project to life.
                </h2>

                <form ref={form} onSubmit={formSubmissionHandler}>
                  <div className="contact__page-name_email_container">
                    <input
                      onChange={nameChangeHandler}
                      className={`contact__page-name_input ${
                        nameHasError && " invalid"
                      }`}
                      name="user_name"
                      type="text"
                      placeholder="Name"
                      value={nameValue}
                      onBlur={nameInputBlurHandler}
                    />
                    <input
                      className={`contact__page-email_input ${
                        emailHasError && " invalid"
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
                      subjectHasError && " invalid"
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
                    className={`contact__page-textarea ${
                      textHasError && " invalid"
                    }`}
                    placeholder="Message..."
                    rows="6"
                    onChange={textChangeHandler}
                    value={textValue}
                    onBlur={textInputBlurHandler}
                  ></textarea>
                  <button className="btn contact__page-submit" type="submit">
                    Send
                  </button>
                  <ToastContainer
                    style={{ fontSize: "16px", color: "black" }}
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
              <div className="contact__page-map">
                <MapContainer
                  className="map"
                  center={position}
                  zoom={10}
                  scrollWheelZoom={true}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={position} icon={customIcon}>
                    <Popup>My location</Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Contacts;
