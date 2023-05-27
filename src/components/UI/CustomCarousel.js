import React from "react";
import { Carousel, Image } from "react-bootstrap";

const CustomCarousel = (props) => {
  return (
    <Carousel
      activeIndex={props.index}
      onSelect={props.handleSelect}
      style={{
        overflow: "hidden",
      }}
    >
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={props.src1}
          alt={props.alt1}
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={props.src2}
          alt={props.alt2}
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={props.src3}
          alt={props.alt3}
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CustomCarousel;
