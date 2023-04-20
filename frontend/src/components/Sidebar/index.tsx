import React from "react";
import { Button } from "../Button";

export const Sidebar = () => {
  const containerStyle = {
    boxShadow:
      "0px 5px 15px rgba(0, 0, 0, 0.25), inset 0px 5px 15px rgba(255, 255, 255, 0.25)",
  };

  return (
    <div
      style={containerStyle}
      className="flex flex-col h-full p-6 w-2/12 items-stretch justify-between"
    >
      <div className="flex flex-col h-[80%] justify-start items-baseline">
        <Button textColor="" content="" backgroundColor="" hoverColor="" />
        <Button textColor="" content="" backgroundColor="" hoverColor="" />
      </div>
      <div className="flex flex-col h-[80%] justify-end items-center">xsss</div>
    </div>
  );
};
