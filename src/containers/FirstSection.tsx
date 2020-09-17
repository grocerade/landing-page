import * as React from "react";

import { FirstText } from "./FirstText";

import food from "../assets/Food.png";

interface FirstSectionProps {
  refContactForm: React.RefObject<HTMLDivElement>;
}

const FirstSection: React.FunctionComponent<FirstSectionProps> = ({
  refContactForm,
}) => {
  return (
    <div className="first_section">
      <div className="first_section_page">
        <div className="first_section_content">
          <div className="first_section_content_box">
            <FirstText refContactForm={refContactForm} />
            <img className="img_food" src={food} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { FirstSection };
