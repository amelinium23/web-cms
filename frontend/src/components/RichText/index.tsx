import ReactMarkdown from "react-markdown";
import { RichTextProps } from "./types";
import { markdownClassName } from "./classNames";

export const RichText = ({ markdown }: RichTextProps) => {
  return (
    <ReactMarkdown className={markdownClassName}>{markdown}</ReactMarkdown>
  );
};
