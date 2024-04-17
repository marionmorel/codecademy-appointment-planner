import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  /* Define state variables for contact info and duplicate check */
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);

   const handleSubmit = (e) => {
    e.preventDefault();
    /* Add contact info and clear data if the contact name is not a duplicate */
    if (!duplicate) {
      addContact(name, phoneNumber, email);
      setName("");
      setPhoneNumber("");
      setEmail("");
    }
  };

  /* Using hooks, check for contact name in the contacts array variable in props */
  useEffect(() => {
    const nameIsDuplicate = () => {
      const found = contacts.find((contact) => contact.name === name);
      if (found) {
        return true;
      }
      return false;
    };

    if (nameIsDuplicate()) {
      setDuplicate(true);
    } else {
      setDuplicate(false);
    }
  }, [name, contacts, duplicate]);


  return (
    <>
      <section>
        <h2>
          Add Contact
          {duplicate ? " - Name Already Exists" : ""}
        </h2>
        <ContactForm
          name={name}
          setName={setName}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList 
          tiles={contacts} 
        />
      </section>
    </>
  );
};
