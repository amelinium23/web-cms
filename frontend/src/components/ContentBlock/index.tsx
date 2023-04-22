import { ContentBlockLeft } from "./components/ContentBlockLeft";
import { ContentBlockRight } from "./components/ContentBlockRight";
import { ContentBlockProps } from "./types";

export const ContentBlock = ({
  title,
  description,
  imageLeft,
  tiles,
}: ContentBlockProps) => {
  return imageLeft ? (
    <ContentBlockLeft title={title} description={description} tiles={tiles} />
  ) : (
    <ContentBlockRight title={title} description={description} tiles={tiles} />
  );
};
