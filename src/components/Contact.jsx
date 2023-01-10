import React from "react";
import monacat from "../assets/monacat.png";
import "../styles/contact.css";
import { BsTelegram, BsGithub, BsTwitter, BsInstagram } from "react-icons/bs";
import { FiCodepen } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import ContactData from "../database/ContactData";
import ContactItem from "../database/ContactItem";

const Contact = () => {
  return (
    <div className="contact">
      <figure className="contact__figure">
        <img src={monacat} alt="" className="contact__figure-image" />
      </figure>
      <div className="contact__content">
        <p className="contact__content-text">
          من <span className="accent-color">مهدی دهقانی</span> هستم توسعه دهنده
          ی این پروژه.
          <br />
          من عاشق برنامه نویسی ام و به برنامه نویسی به چشم یه هنر نگاه میکنم.
          اگه از کارم خوشت اومده و میخوای باهم همکاری کنیم یا نظری در مورد این
          پروژه داشتی خوشحال میشم باهام درمیون بذاری. این پروژه و سایر پروژه هام
          رو میتونی توی گیتهابم . پیدا کنی. خوشحال میشم منو تو شبکه های اجتماعی
          هم فالوو کنی :)
        </p>
        <ul className="contact-list">
          {ContactData.map((item) => {
            return <ContactItem {...item} key={item.id} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Contact;
