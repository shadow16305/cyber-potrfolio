import React, { Fragment } from "react";

const ContactForm = () => {
  return (
    <Fragment>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 lg:gap-[165px] container m-auto">
        <div className="flex flex-col">
          <h1 className="text-black text-[52px] lg:text-[88px] leading-[75px] ps-4 lg:ps-0 lg:text-8xl md:max-w-none lg:max-w-[373px] md:text-center lg:text-start uppercase max-w-[250px]">
            send me a message
          </h1>
          <p className="text-black leading-[150%] text-[32px] tracking-[-0.5px] max-w-[90%] lg:text-4xl md:text-center lg:text-start mt-10 mx-auto lg:mx-0 lg:max-w-md">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </div>
        <div className="bg-black h-[399px] w-[2px] hidden lg:block"></div>
        <form className="flex flex-col lg:justify-center gap-8 w-[360px] lg:w-[466px]">
          <input
            className="bg-transparent border-[3px] border-t-0 border-x-0 border-b-[#000] py-3 text-2xl focus:outline-none placeholder-black"
            type="text"
            placeholder="NAME"
          />
          <input
            className="bg-transparent border-[3px] border-t-0 border-x-0 border-b-[#000] py-3 text-2xl focus:outline-none placeholder-black"
            type="text"
            placeholder="EMAIL"
          />
          <input
            className="bg-transparent border-[3px] border-t-0 border-x-0 border-b-[#000] py-3 text-2xl focus:outline-none placeholder-black"
            type="text"
            placeholder="MESSAGE"
          />
          <div className="flex justify-end mt-4">
            <button
              className="uppercase text-black text-[24px] lg:text-2xl tracking-[4.8px] submit"
              style={{ fontFamily: "blender_probold" }}
            >
              send
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default ContactForm;
