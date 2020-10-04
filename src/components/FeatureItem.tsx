import * as React from "react";

interface FeatureItemProps {
  text: string;
  image: string;
  description: string;
}

const FeatureItem: React.FunctionComponent<FeatureItemProps> = ({
  text,
  image,
  description,
}) => {
  return (
    <div className="feature_item">
      <img alt="img" src={image} />
      <div className="feature_item_text">{text}</div>
      <div className="feature_item_desc">{description}</div>
    </div>
  );
};

export { FeatureItem };
