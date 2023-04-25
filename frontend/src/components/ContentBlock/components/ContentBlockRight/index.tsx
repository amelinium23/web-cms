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
  tags,
}: ContentBlockProps) => {
  if (!tags) return <></>;

  return (
    <div className="flex h-full flex-row gap-4">
      <div style={shadowStyle} className={textContainerClassName}>
        <h2 className={titleClassName}>{title}</h2>
        <div className="flex flex-row w-full gap-4">
          {tags.map((tag) => (
            <div
              style={{
                color: tag.textColor,
                backgroundColor: tag.backgroundColor,
              }}
              className="flex flex-row gap-1 p-1 font-semibold items-center justify-center rounded-xl"
              key={tag.name}
            >
              {/* <Image src={} width={20} height={20} alt="" /> */}
              {tag.name}
            </div>
          ))}
        </div>
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
