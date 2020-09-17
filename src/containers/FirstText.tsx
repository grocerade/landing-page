import * as React from "react";

import { handleScrollTo } from "../utils";

interface FirstTextProps {
  refContactForm: React.RefObject<HTMLDivElement>;
}

const FirstText: React.FunctionComponent<FirstTextProps> = ({
  refContactForm,
}) => {
  const text = `Restaurants\n
    go shopping\n
    in GROCERADE`;

  return (
    <div className="first_section_left_content">
      <div className="first_text">{text}</div>
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
