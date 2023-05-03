import ProgressBar from '@ramonak/react-progress-bar';
import Image from 'next/image';
import React from 'react';

import arrow from '../../assets/arrow.svg';
import humans from '../../assets/humans.svg';
import { Button } from '../Button';
import {
  buttonsContainerClassName,
  progressBarContainerClassName,
  sidebarContainerClassName,
  textClassName,
} from './classNames';
import { SidebarProps } from './types';

export const Sidebar = ({ sidebar }: SidebarProps) => {
  const containerStyle = {
    boxShadow:
      '0px 5px 15px rgba(0, 0, 0, 0.25), inset 0px 5px 15px rgba(255, 255, 255, 0.25)',
  };

  if (!sidebar) return <></>;
  const { buttons } = sidebar;

  return (
    <div style={containerStyle} className={sidebarContainerClassName}>
      <div className={buttonsContainerClassName}>
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
      <div className={progressBarContainerClassName}>
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
        <span className={textClassName}>{sidebar.header.title}</span>
        <Button
          content={buttons[3].content}
          textColor={buttons[3].textColor}
          hoverColor={buttons[3].hoverColor}
          href=""
          backgroundColor={buttons[3].backgroundColor}
        />
      </div>
    </div>
  );
};
