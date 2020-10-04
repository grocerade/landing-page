import * as React from "react";

import brandImage from "../assets/brand.png";

import { handleScrollTo } from "../utils";

interface FirstTextProps {
  refContactForm: React.RefObject<HTMLDivElement>;
}

const FirstText: React.FunctionComponent<FirstTextProps> = ({
  refContactForm,
}) => {
  const text = `Restaurants go\n
    shopping in\n`;

  return (
    <div className="first_section_left_content">
      <div className="first_text">
        {text}
        <img src={brandImage} alt="GROCERADE" />
      </div>
      <div
        className="btn_get_started"
        onClick={() => {
          handleScrollTo(refContactForm);
        }}
      >
        Get Started
      </div>
    </div>
  );
};

export { FirstText };
