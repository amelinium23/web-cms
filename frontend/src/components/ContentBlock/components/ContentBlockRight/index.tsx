import { RichText } from "@/components/RichText";
import { ContentBlockProps } from "../../types";
import {
  contentBlockClassName,
  imageContainerClassName,
  shadowStyle,
  tagContainerClassName,
  textContainerClassName,
  titleClassName,
} from "../../constants";
import Image from "next/image";
import { TagsList } from "../Tags";

export const ContentBlockRight = ({
  title,
  description,
  children,
  imageSrc,
  tags,
}: ContentBlockProps) => {
  if (!tags) return <></>;

  return (
    <div className={contentBlockClassName}>
      <div style={shadowStyle} className={textContainerClassName}>
        <h2 className={titleClassName}>{title}</h2>
        <div className={tagContainerClassName}>
          <TagsList tags={tags} />
        </div>
        <RichText markdown={description} />
        <div>{children}</div>
      </div>
      <div className={imageContainerClassName}>
        <Image src={imageSrc} width={300} height={300} alt="placeholder" />
      </div>
    </div>
  );
};
