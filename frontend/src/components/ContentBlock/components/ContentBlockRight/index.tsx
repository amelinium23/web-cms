import { RichText } from "@/components/RichText";
import { ContentBlockProps } from "../../types";
import {
  imageContainerClassName,
  shadowStyle,
  textContainerClassName,
  titleClassName,
} from "../../constants";
import Image from "next/image";

export const ContentBlockRight = ({
  title,
  description,
  children,
  imageSrc,
}: ContentBlockProps) => {
  return (
    <div className="flex h-full flex-row gap-4">
      <div style={shadowStyle} className={textContainerClassName}>
        <h2 className={titleClassName}>{title}</h2>
        <RichText markdown={description} />
        <div>{children}</div>
      </div>
      <div className={imageContainerClassName}>
        <Image
          src={"http://localhost:1337" + imageSrc}
          width={200}
          height={200}
          alt="placeholder"
        />
      </div>
    </div>
  );
};
