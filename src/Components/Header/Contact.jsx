import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <>
      <div className="container">
        <h2> Submit The Form Below We will Contact You Back Soon </h2>
        <label for="fname">First Name</label>

        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
        />
        <label for="lname">Last Name</label>

        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name.."
        />
        <label for="email">Email</label>

        <input
          type="text"
          id="email"
          name="lastname"
          placeholder="Your Email.."
        />

        <label for="country">Country</label>
        <select id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
          <option value="india">India</option>
          <option value="other">Other</option>
        </select>

        <input type="submit" value="Submit" />
      </div>
    </>
  );
}

export default Contact;
