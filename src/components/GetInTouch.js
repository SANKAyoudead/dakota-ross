import React from "react";

export default function GetInTouch() {
  return (
    <div className="getInTouch">
      <div className="circle">
        <i className="downArrow" />
      </div>
      <h3>
        GET IN TOUCH <span>to plan yours</span>
      </h3>
      <div className="container">
        <form
          netlify
          name="contact"
          className="netlifyForm mb-3 mt-5"
          method="post"
        >
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
                name="contactName"
                id="contactName"
                required
              />
            </div>
            <div className="col">
              <input
                type="phone"
                className="form-control"
                placeholder="Your phone number"
                name="phoneNumber"
                id="phoneNumber"
                required
              />
            </div>
            <div className="col">
              <input
                type="email"
                className="form-control"
                placeholder="Your email"
                name="emailAddress"
                id="emailAddress"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <textarea
                className="form-control"
                placeholder="Your Message"
                name="message"
                id="message"
                cols="30"
                rows="8"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button class="btn btn-secondary btn-lg" type="submit">
                Submit form
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
