import React, { Fragment } from "react";
import ContactForm from "./ContactForm";
import classes from "./Footer.module.css";

import githubIcon from "../../assets/icons/github-dark.svg";
import telegramIcon from "../../assets/icons/telegram-dark.svg";
import linkedInIcon from "../../assets/icons/linkedin-dark.svg";
import frontEndMentorIcon from "../../assets/icons/frontendmentor-dark.svg";

const Footer = () => {
  return (
    <Fragment>
      <div className={classes.footer}>
        <div className="pt-20 lg:pt-32 lg:pb-16">
          <ContactForm />
        </div>
        <div className="py-8 lg:py-0">
          <ul className="flex justify-center pb-10 list-none gap-8 items-center">
            <li>
              <a className="cursor-pointer">
                <img src={githubIcon} width={37} height={33} alt="" />
              </a>
            </li>
            <li>
              <a className="cursor-pointer">
                <img src={telegramIcon} width={35} height={30} alt="" />
              </a>
            </li>
            <li>
              <a className="cursor-pointer">
                <img src={linkedInIcon} width={35} height={30} alt="" />
              </a>
            </li>
            <li>
              <a className="cursor-pointer">
                <img src={frontEndMentorIcon} width={32} height={30} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
