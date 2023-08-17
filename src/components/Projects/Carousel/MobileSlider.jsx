import React, { Fragment, useState } from "react";

import project_mobile_one from "../../../assets/images/blogr-mobile.png";
import project_mobile_two from "../../../assets/images/sunnyside-mobile.png";
import project_mobile_three from "../../../assets/images/space-tourism-website-mobile.png";
import project_mobile_four from "../../../assets/images/art-gallery-website-mobile.png";
import project_mobile_five from "../../../assets/images/easybank-mobile.png";
import project_mobile_six from "../../../assets/images/planets-fact-site-mobile.png";

import navBtn from "../../../assets/icons/navBtn.svg";

import CarouselItem from "./CarouselItem";

const MobileSlider = () => {
  const content = [
    {
      id: "m1",
      title: "BLOGR LANDING PAGE",
      text: "HTML/CSS/BOOTSTRAP",
      image: project_mobile_one,
    },
    {
      id: "m2",
      title: "SUNNYSIDE LANDING PAGE",
      text: "HTML/CSS/BOOTSTRAP",
      image: project_mobile_two,
    },
    {
      id: "m3",
      title: "SPACE TOURISM WEBSITE",
      text: "HTML/CSS/BOOTSTRAP/JS",
      image: project_mobile_three,
    },
    {
      id: "m4",
      title: "ART GALLERY WEBSITE",
      text: "HTML/CSS/BOOTSTRAP",
      image: project_mobile_four,
    },
    {
      id: "m5",
      title: "EASYBANK LANDING PAGE",
      text: "HTML/CSS/BOOTSTRAP",
      image: project_mobile_five,
    },
    {
      id: "m6",
      title: "PLANETS FACT SITE",
      text: "HTML/CSS/BOOTSTRAP/JS",
      image: project_mobile_six,
    },
  ];

  const [left, setLeft] = useState(0);

  const handlePrevClick = () => {
    let newLeft = +left - 2040 / 6;
    if (newLeft < 0) {
      newLeft = 340;
      setLeft(newLeft);
    } else {
      setLeft(newLeft);
    }
  };

  const handleNextClick = () => {
    let newLeft = +left + 2040 / 6;
    if (newLeft >= 2040) {
      newLeft = 0;
      setLeft(newLeft);
    } else {
      setLeft(newLeft);
    }
  };

  return (
    <Fragment>
      <div className="w-[340px] h-[400px] relative overflow-hidden m-auto">
        <div
          className={`flex w-[2040px] absolute text-white text-center`}
          style={{ left: `-${left}px`, transition: "250ms" }}
        >
          {content.map((item) => (
            <CarouselItem value={item} key={item.id} />
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-10 mt-11">
        <button>
          <img src={navBtn} alt="" onClick={handlePrevClick} />
        </button>
        <button>
          <img
            src={navBtn}
            className="scale-x-[-1]"
            alt=""
            onClick={handleNextClick}
          />
        </button>
      </div>
    </Fragment>
  );
};

export default MobileSlider;
