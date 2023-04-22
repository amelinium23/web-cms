import { RichText } from "@/components/RichText";
import { ContentBlockProps } from "../../types";
import {
  imageContainerClassName,
  shadowStyle,
  textContainerClassName,
  titleClassName,
} from "../../constants";

export const ContentBlockRight = ({
  title,
  description,
  children,
}: ContentBlockProps) => {
  return (
    <div className="flex h-full flex-row gap-4">
      <div style={shadowStyle} className={textContainerClassName}>
        <h2 className={titleClassName}>{title}</h2>
        <RichText markdown={description} />
        <div>{children}</div>
      </div>
      <div className={imageContainerClassName}>image</div>
    </div>
  );
};
