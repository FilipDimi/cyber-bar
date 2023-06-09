import React from "react";
import { Loading as Ld } from "@nextui-org/react";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Ld size="lg" />
    </div>
  );
};

export default Loading;
