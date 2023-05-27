import React, { useState } from "react";
import { colors } from "../../common/companySpecific";

const style = {
  normal: {
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 15,
    paddingRight: 15,
    border: 0,
    fontSize: 18,
    color: "#fff"
  },
  unhover: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  hover: {
    backgroundColor: "#CCC",
    borderColor: colors.accent,
  }
};

const CustomButton = (props) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      onClick={props.onClick}
      style={{...style.normal, ...(hover ? style.hover : style.unhover)}}
      
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      {props.text}
    </button>
  );
};

export default CustomButton;
