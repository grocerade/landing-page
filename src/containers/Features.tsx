import * as React from "react";

import { FeatureItem } from "../components";

import ChatImage from "../assets/Feature - Chat.png";
import OrderImage from "../assets/Feature - Order.png";
import PayImage from "../assets/Feature - Payment.png";

interface FeaturesProps {}

const FEATURES = [
  {
    text: "Chat",
    image: ChatImage,
    description: "Send messages or\nmake video calls \nwith all your suppliers",
  },
  {
    text: "Order",
    image: OrderImage,
    description: "Create purchase orders\nfor all your suppliers\nin one place",
  },
  {
    text: "Pay",
    image: PayImage,
    description:
      "Put products from\ndifferent suppliers\nin the basket and pay once",
  },
];

const Features: React.FunctionComponent<FeaturesProps> = () => {
  return (
    <div className="features">
      <div className="features_page">
        <div className="features_content">
          {FEATURES.map((f, i) => {
            return (
              <FeatureItem
                key={i}
                text={f.text}
                image={f.image}
                description={f.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { Features };
