import * as React from "react";

// import { SlideItem } from "../components";

import { SliderItemType } from "../types";

import Image1_1 from "../assets/Orders-iphone.png";
import Image1_2 from "../assets/Payments-iphone.png";
import Image1_3 from "../assets/Chat-iphone.png";
import Image1_4 from "../assets/Offers-iphone.png";

import Image2_1 from "../assets/F - Clients - iPhone.png";
import Image2_2 from "../assets/F - Orders - iPhone.png";
import Image2_3 from "../assets/F - Delivery - iPhone.png";
import Image2_4 from "../assets/F - Notification - iPhone.png";

interface SliderProps {}

interface SLIDE_CONTENT_TYPE {
  [tab: number]: {
    [step: number]: SliderItemType;
  };
}
const SLIDE_CONTENT: SLIDE_CONTENT_TYPE = {
  1: {
    1: {
      title: "Get the products from the region in one place",
      image: Image1_1,
    },
    2: {
      title:
        "Create a purchase order and forget about paying each supplier separately",
      image: Image1_2,
    },
    3: {
      title: "Send and receive messages from all your suppliers in one place",
      image: Image1_3,
    },
    4: {
      title: "Get notified of special offers from the region",
      image: Image1_4,
    },
  },
  2: {
    1: {
      title: "Sell your products to the city’s restaurants directly",
      image: Image2_1,
    },
    2: { title: "Manage all outstanding orders in one place", image: Image2_2 },
    3: {
      title:
        "Receive optimized routing for self-delivery or select our delivery partners",
      image: Image2_3,
    },
    4: {
      title: "Notify your customers about leftovers and get bids instantly",
      image: Image2_4,
    },
  },
};

const Slider: React.FunctionComponent<SliderProps> = () => {
  const PAGES_TO_SLIDE = 4;

  const [currentTab, setCurrentTab] = React.useState(1);
  const [currentPage, setCurrentPage] = React.useState(1);

  const changeTab = (tabIndex: number) => {
    setCurrentTab(tabIndex);
    setCurrentPage(1);
  };

  const changePage = (pageAction: number) => {
    let newPage: number;
    if (pageAction === 1 && currentPage === PAGES_TO_SLIDE) {
      newPage = 1;
    } else if (pageAction === -1 && currentPage === 1) {
      newPage = PAGES_TO_SLIDE;
    } else {
      newPage = currentPage + pageAction;
    }
    setCurrentPage(newPage);
  };

  return (
    <div className="slider">
      <div className="slider_page">
        <div className="tab_selector">
          <div
            className={`tab_selector_item${
              currentTab === 1 ? " selected" : ""
            }`}
            onClick={() => {
              changeTab(1);
            }}
          >
            I'm a restaurant
          </div>
          <div
            className={`tab_selector_item${
              currentTab === 2 ? " selected" : ""
            }`}
            onClick={() => {
              changeTab(2);
            }}
          >
            I'm a farmer
          </div>
        </div>
        <div className="slider_content">
          <div className="slide_item">
            <div className="slide_item_image">
              <img
                alt={`img`}
                src={SLIDE_CONTENT[currentTab][currentPage].image}
              />
            </div>
            <div className="slide_item_right">
              <div className="slide_item_title">
                {SLIDE_CONTENT[currentTab][currentPage].title}
              </div>
              <div className="slide_item_text">
                {SLIDE_CONTENT[currentTab][currentPage].text}
              </div>
              <div className="slider_controllers">
                <div
                  className="slider_controller_previous"
                  onClick={() => {
                    changePage(-1);
                  }}
                >
                  <i className="fas fa-chevron-left"></i>
                </div>
                <div
                  className="slider_controller_next"
                  onClick={() => {
                    changePage(1);
                  }}
                >
                  <i className="fas fa-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>
          {/* <SlideItem
            content={SLIDE_CONTENT[currentTab][currentPage]}
            itemId={1}
            currentPage={currentPage}
          />
          <SlideItem
            content={SLIDE_CONTENT[currentTab][currentPage]}
            itemId={2}
            currentPage={currentPage}
          />
          <SlideItem
            content={SLIDE_CONTENT[currentTab][currentPage]}
            itemId={3}
            currentPage={currentPage}
          />
          <SlideItem
            content={SLIDE_CONTENT[currentTab][currentPage]}
            itemId={4}
            currentPage={currentPage}
          /> */}
        </div>
      </div>
    </div>
  );
};

export { Slider };
