import { ContentBlockLeft } from "./components/ContentBlockLeft";
import { ContentBlockRight } from "./components/ContentBlockRight";
import { ContentBlockProps } from "./types";

export const ContentBlock = ({
  title,
  description,
  imageLeft,
  tags,
  children,
  imageSrc,
}: ContentBlockProps) => {
  return imageLeft ? (
    <ContentBlockLeft
      title={title}
      description={description}
      tags={tags}
      imageSrc={""}
    >
      {children}
    </ContentBlockLeft>
  ) : (
    <ContentBlockRight
      title={title}
      description={description}
      tags={tags}
      imageSrc={""}
    >
      {children}
    </ContentBlockRight>
  );
};
