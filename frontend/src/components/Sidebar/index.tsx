import React from "react";
import { Button } from "../Button";
import humans from "../../assets/humans.svg";
import arrow from "../../assets/arrow.svg";
import Image from "next/image";

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
      <div className="flex flex-col h-[80%] gap-2 justify-start items-baseline">
        <Button
          textColor="#699FBF"
          content="Moje pliki"
          backgroundColor="white"
          icon={<Image src={arrow} width={20} height={20} alt="arrow" />}
        />
        <Button
          textColor="#699FBF"
          content="Udostępnione dla mnie"
          backgroundColor="white"
          icon={<Image src={humans} width={20} height={20} alt="arrow" />}
        />
      </div>
      <div className="flex flex-col h-[80%] justify-end items-center">xsss</div>
    </div>
  );
};
