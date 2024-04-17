import React from "react";

export const ContactForm = ({
  name,
  setName,
  phoneNumber,
  setPhoneNumber,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          name="name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
          placeholder="Contact Name"
          aria-label="Contact Name"
        />
      </label>
      <br/>
      <label>
        <input 
          type="tel"
          name="phone"
          value={phoneNumber}
          required
          onChange={(e) => setPhoneNumber(e.target.value)}
          pattern="^0[1-6]{1}(([0-9]{2}){4})|((\s[0-9]{2}){4})|((-[0-9]{2}){4})$"
          placeholder="Phone Number"
          aria-label="Phone Number"
        />
      </label>
      <br/>
      <label>
        <input 
          type="email"
          name="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          aria-label="Email"
        />
      </label>
      <br/>
      <label>
        <input 
          type="submit"
          value="Add Contact"
          aria-label="Add Contact" 
        />
      </label>
    </form>
  );
};

