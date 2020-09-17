import * as React from "react";

import { Header } from "./Header";
import { FirstSection } from "./FirstSection";
import { Slider } from "./Slider";
import { Footer } from "./Footer";
import { ContactForm } from "./ContactForm";
import { Features } from "./Features";

import bgImg from "../assets/first_image.png";

interface GroceradeProps {}

const Grocerade: React.FunctionComponent<GroceradeProps> = () => {
  const refContactForm = React.useRef<HTMLDivElement>(null);

  return (
    <div className="page">
      <Header />
      <div className="page_content">
        <div
          className="first_section_bg"
          style={{ backgroundImage: `url('${bgImg}')` }}
        >
          <FirstSection refContactForm={refContactForm} />
          <div className="catch_phrase">
            Connect your restaurant to the region
          </div>
          <Features />
        </div>
        <Slider />
        <ContactForm refContactForm={refContactForm} />
      </div>
      <Footer />
    </div>
  );
};

export { Grocerade };
