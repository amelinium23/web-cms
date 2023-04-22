import { ContentBlockLeft } from "./components/ContentBlockLeft";
import { ContentBlockRight } from "./components/ContentBlockRight";
import { ContentBlockProps } from "./types";

export const ContentBlock = ({
  title,
  description,
  imageLeft,
  tiles,
  children,
}: ContentBlockProps) => {
  return imageLeft ? (
    <ContentBlockLeft title={title} description={description} tiles={tiles}>
      {children}
    </ContentBlockLeft>
  ) : (
    <ContentBlockRight title={title} description={description} tiles={tiles}>
      {children}
    </ContentBlockRight>
  );
};
