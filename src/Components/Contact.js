import React from "react";
import MainHeading from "./MainHeading";

export default function Contact() {
  return (
    <>
      <div className="contactContainer container" id="contact">
        <MainHeading section="Contact Us"></MainHeading>

        <div className="contactContentContainer">
          <section className="mapSection">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28014.048493200276!2d77.25095257910158!3d28.637072299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce104f3e06619%3A0x9d3a485d0325bf2e!2sBurger%20King%20V3S%20Mall%20New%20Delhi!5e0!3m2!1sen!2sin!4v1658933963367!5m2!1sen!2sin"
              loading="lazy"
              title="Maps"
              referrerPolicy="no-referrer-when-downgrade"
              id="maps"
            ></iframe>
            <img src="./images/anim2.gif" alt="" id="anim2"/>
          </section>

          <section className="formSection">
            <form action="" className="contactForm">
              <input
                type="text"
                placeholder="Name"
                className="btnCommonDesign"
              />
              <input
                type="text"
                placeholder="Subject"
                className="btnCommonDesign"
              />
              <textarea
                name=""
                className="btnCommonDesign"
                id=""
                cols="20"
                rows="7"
                placeholder="Your Query Goes Here..."
              ></textarea>
              <button type="submit" className="btnCommonDesign">
                Send
              </button>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}
