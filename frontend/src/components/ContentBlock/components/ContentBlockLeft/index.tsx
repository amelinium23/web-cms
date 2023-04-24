import React from "react";
import { ContentBlockProps } from "../../types";
import { RichText } from "@/components/RichText";
import {
  imageContainerClassName,
  shadowStyle,
  textContainerClassName,
  titleClassName,
} from "../../constants";
import Image from "next/image";

export const ContentBlockLeft = ({
  title,
  description,
  children,
  imageSrc,
  tags,
}: ContentBlockProps) => {
  return (
    <div className="flex h-full flex-row gap-4">
      <div className={imageContainerClassName}>
        <Image
          src={"http://localhost:1337" + imageSrc}
          width={200}
          height={200}
          alt="placeholder"
        />
      </div>
      <div style={shadowStyle} className={textContainerClassName}>
        <h2 className={titleClassName}>{title}</h2>
        <div className="flex flex-row w-full">
          {tags && tags.map((tag) => <span key={tag.name}>{tag}</span>)}
        </div>
        <RichText markdown={description} />
        {children}
      </div>
    </div>
  );
};
