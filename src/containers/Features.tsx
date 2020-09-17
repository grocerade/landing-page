import * as React from "react";

import { FeatureItem } from "../components";

import ChatImage from "../assets/CHAT-TINY.png";
import OrderImage from "../assets/ORDER-TINY.png";
import PayImage from "../assets/PAY-TINY.png";

interface FeaturesProps {}

const FEATURES = [
  { text: "Chat", image: ChatImage },
  { text: "Order", image: OrderImage },
  { text: "Pay", image: PayImage },
];

const Features: React.FunctionComponent<FeaturesProps> = () => {
  return (
    <div className="features">
      <div className="features_page">
        <div className="features_content">
          {FEATURES.map((f, i) => {
            return <FeatureItem key={i} text={f.text} image={f.image} />;
          })}
        </div>
      </div>
    </div>
  );
};

export { Features };
