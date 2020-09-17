import * as React from "react";

import brandImage from "../assets/brand-white.png";

interface FooterProps {}

const Footer: React.FunctionComponent<FooterProps> = () => {
  return (
    <div className="footer">
      <div className="footer_page">
        <div className="footer_content">
          <img className="footer_brand" alt="brand" src={brandImage} />
        </div>
      </div>
    </div>
  );
};

export { Footer };
