import * as React from "react";

import brandImage from "../assets/brand.png";

interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => {
  return (
    <div className="header">
      <div className="header_page">
        <div className="header_content">
          <img className="header_brand" alt="brand" src={brandImage} />
        </div>
      </div>
    </div>
  );
};

export { Header };
