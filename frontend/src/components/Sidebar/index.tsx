import React from "react";
import { Button } from "../Button";
import humans from "../../assets/humans.svg";
import arrow from "../../assets/arrow.svg";
import Image from "next/image";
import ProgressBar from "@ramonak/react-progress-bar";
import { Sidebar as TSideBar } from "@/types/settingsPageTypes";

export const Sidebar = ({ sidebar }: { sidebar: TSideBar }) => {
  const containerStyle = {
    boxShadow:
      "0px 5px 15px rgba(0, 0, 0, 0.25), inset 0px 5px 15px rgba(255, 255, 255, 0.25)",
  };

  const { buttons } = sidebar;

  return (
    <div
      style={containerStyle}
      className="flex flex-col h-screen p-6 items-stretch justify-between"
    >
      <div className="flex flex-col h-full gap-2 justify-start items-baseline">
        <Button
          content={buttons[0].content}
          backgroundColor={buttons[0].backgroundColor}
          textColor={buttons[0].textColor}
          hoverColor=""
          href={buttons[0].link as string}
          icon={<Image src={arrow} width={20} height={20} alt="arrow" />}
        />
        <Button
          content={buttons[1].content}
          backgroundColor={buttons[1].backgroundColor}
          textColor={buttons[1].textColor}
          hoverColor=""
          href={buttons[1].link as string}
          icon={<Image src={humans} width={20} height={20} alt="arrow" />}
        />
      </div>
      <div className="flex flex-col h-full w-full justify-end gap-4 items-center">
        <Button
          content={buttons[2].content}
          backgroundColor={buttons[2].backgroundColor}
          textColor={buttons[2].textColor}
          hoverColor=""
          href={buttons[2].link as string}
        />
        <ProgressBar
          completed={(2.5 / 5.0) * 100}
          customLabel=" "
          maxCompleted={100}
          className="w-full"
          baseBgColor="#337439"
          bgColor="#E6EEE6"
        />
        <span className="text-xs text-[#9BBFD4]">{sidebar.header.title}</span>
        <Button
          content="Kup miejsce"
          textColor="#055F94"
          hoverColor="#055F94"
          href=""
          backgroundColor="white"
        />
      </div>
    </div>
  );
};
