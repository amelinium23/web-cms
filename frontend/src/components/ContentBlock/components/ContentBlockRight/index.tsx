import { RichText } from "@/components/RichText";
import { ContentBlockProps } from "../../types";
import {
  imageContainerClassName,
  shadowStyle,
  textContainerClassName,
  titleClassName,
} from "../../constants";
import Image from "next/image";
import { checkMark } from "@/assets";

export const ContentBlockRight = ({
  title,
  description,
  children,
  imageSrc,
  tags,
}: ContentBlockProps) => {
  if (!tags) return <></>;

  return (
    <div className="flex h-full flex-row gap-4">
      <div style={shadowStyle} className={textContainerClassName}>
        <h2 className={titleClassName}>{title}</h2>
        <div className="flex flex-row flex-wrap w-full gap-4">
          {tags.map((tag) => (
            <div
              style={{
                color: tag.textColor,
                backgroundColor: tag.backgroundColor,
              }}
              className="flex flex-row px-2 py-1 font-semibold items-center justify-center rounded-xl"
              key={tag.name}
            >
              <Image src={checkMark} width={20} height={20} alt="" />
              {tag.name}
            </div>
          ))}
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
