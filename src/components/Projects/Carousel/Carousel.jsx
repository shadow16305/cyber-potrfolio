import React, { Fragment, useState } from "react";

import "./Carousel.css";

import MobileSLider from "./MobileSlider";
import DesktopSlider from "./DesktopSlider";

const Carousel = () => {
  return (
    <Fragment>
      <div className="hidden lg:block">
        <DesktopSlider />
      </div>
      <div className="lg:hidden">
        <MobileSLider />
      </div>
    </Fragment>
  );
};

export default Carousel;
