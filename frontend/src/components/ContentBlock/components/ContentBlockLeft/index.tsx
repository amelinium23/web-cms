import React from "react";
import { ContentBlockProps } from "../../types";
import { RichText } from "@/components/RichText";
import {
  imageContainerClassName,
  shadowStyle,
  textContainerClassName,
  titleClassName,
} from "../../constants";

export const ContentBlockLeft = ({
  title,
  description,
  children,
}: ContentBlockProps) => {
  return (
    <div className="flex h-full flex-row gap-4">
      <div className={imageContainerClassName}>image</div>
      <div style={shadowStyle} className={textContainerClassName}>
        <h2 className={titleClassName}>{title}</h2>
        <RichText markdown={description} />
        {children}
      </div>
    </div>
  );
};
