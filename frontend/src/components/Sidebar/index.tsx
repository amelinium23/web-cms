import React from "react";
import { Button } from "../Button";
import humans from "../../assets/humans.svg";
import arrow from "../../assets/arrow.svg";
import Image from "next/image";
import ProgressBar from "@ramonak/react-progress-bar";

export const Sidebar = () => {
  const containerStyle = {
    boxShadow:
      "0px 5px 15px rgba(0, 0, 0, 0.25), inset 0px 5px 15px rgba(255, 255, 255, 0.25)",
  };

  return (
    <div
      style={containerStyle}
      className="flex flex-col h-screen p-6 items-stretch justify-between"
    >
      <div className="flex flex-col h-full gap-2 justify-start items-baseline">
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
      <div className="flex flex-col h-full w-full justify-end gap-4 items-center">
        <Button
          content="Dodaj pliki"
          textColor="white"
          backgroundColor="#055F94"
        />
        <ProgressBar
          completed={(2.5 / 5.0) * 100}
          customLabel=" "
          maxCompleted={100}
          className="w-full"
          baseBgColor="#337439"
          bgColor="#E6EEE6"
        />
        <span className="text-xs text-[#9BBFD4]">Wykorzystano 2.5 z 5 GB</span>
        <Button
          content="Kup miejsce"
          textColor="#055F94"
          backgroundColor="white"
        />
      </div>
    </div>
  );
};
