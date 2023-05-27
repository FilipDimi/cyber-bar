import React from "react";
import { Image } from "react-bootstrap";

const CustomIconImage = (props) => {
  return (
    <Image
      src={props.imageLink}
      alt={props.imageAlt}
      style={{ maxWidth: "3rem" }}
    />
  );
};

export default CustomIconImage;
