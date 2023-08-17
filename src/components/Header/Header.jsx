import { Fragment } from "react";
import "./Header.css";
import Navbar from "./NavBar";
import Banner from "./Banner";

const Header = () => {
  return (
    <Fragment>
      <div className="header">
        <Navbar />
        <div className="mt-8 lg:mt-[86px] pb-32">
          <Banner />
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
