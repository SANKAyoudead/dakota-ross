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
      <form action="">
        <label htmlFor="name">Your name:</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="phoneNumber">Your phone number:</label>
        <input type="phone" name="phoneNumber" id="phoneNumber" />
        <label htmlFor="emailAddress">Your email address:</label>
        <input type="email" name="emailAddress" id="emailAddress" />
        <textarea name="message" id="message" cols="30" rows="10" />
      </form>
    </div>
  );
}
