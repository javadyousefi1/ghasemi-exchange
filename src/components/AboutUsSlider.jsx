import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimpleSlider = () => {
  const CustomPrevArrow = (props) => (
    <div
      className={props.className}
      style={{ ...props.style, left: "10px", zIndex: 1 }}
      onClick={props.onClick}
    />
  );

  const CustomNextArrow = (props) => (
    <div
      className={props.className}
      style={{ ...props.style, right: "10px", zIndex: 1 }}
      onClick={props.onClick}
    />
  );
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // prevArrow: <CustomPrevArrow />,
    // nextArrow: <CustomNextArrow />,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div style={{ width: "100%", margin: "" }}>
      <Slider {...settings}>
        <div className="p-1h-[600px] flex flex-col">
          <div className="rounded-lg  flex items-center justify-center w-full text-xl bg-mainBlack text-mainGold h-[200px]">
            اسلاید تستی اول
          </div>
        </div>
        <div className="p-1h-[600px] flex flex-col">
          <div className="rounded-lg  flex items-center justify-center w-full text-xl bg-mainBlack text-mainGold h-[200px]">
            اسلاید تستی دوم
          </div>
        </div>
        <div className="p-1h-[600px] flex flex-col">
          <div className="rounded-lg  flex items-center justify-center w-full text-xl bg-mainBlack text-mainGold h-[200px]">
            اسلاید تستی سوم
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
