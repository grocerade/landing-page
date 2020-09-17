import * as React from "react";

interface FeatureItemProps {
  text: string;
  image: string;
}

const FeatureItem: React.FunctionComponent<FeatureItemProps> = ({
  text,
  image,
}) => {
  return (
    <div className="feature_item">
      <img alt="img" src={image} />
      <div className="feature_item_text">{text}</div>
    </div>
  );
};

export { FeatureItem };
