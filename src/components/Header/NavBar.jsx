import { Fragment } from "react";
import githubIcon from "../../assets/icons/github.svg";
import telegramIcon from "../../assets/icons/telegram.svg";
import linkedInIcon from "../../assets/icons/linkedIn.svg";
import frontEndMentorIcon from "../../assets/icons/frontEndMentor.svg";

const Navbar = () => {
  return (
    <Fragment>
      <nav className="flex flex-col lg:flex-row container mx-auto justify-between py-[24px] gap-[16px] items-center lg:max-w-[1380px]">
        <a href="index.html" className="text-white text-4xl logoName">
          Christian A.B.
        </a>
        <ul className="flex list-none gap-8 items-center">
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
      </nav>
    </Fragment>
  );
};

export default Navbar;
