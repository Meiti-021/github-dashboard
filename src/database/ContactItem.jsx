import React from "react";

const ContactItem = ({ icon, address }) => {
  return (
    <li className="contact-item">
      <a href={address} className="contact-link">
        {icon}
      </a>
    </li>
  );
};

export default ContactItem;
