import * as React from "react";

import { SliderItemType } from "../types";

interface SlideItemProps {
  itemId: number;
  currentPage: number;
  content: SliderItemType;
}

const SlideItem: React.FunctionComponent<SlideItemProps> = ({
  itemId,
  currentPage,
  content,
}) => {
  if (itemId === currentPage) {
    const { title, image, text } = content;

    return (
      <div className="slide_item">
        <div className="slide_item_image">
          <img alt={`img${itemId}`} src={image} />
        </div>
        <div className="slide_item_right">
          <div className="slide_item_title">{title}</div>
          <div className="slide_item_text">{text}</div>
        </div>
      </div>
    );
  }
  return <div />;
};

export { SlideItem };
