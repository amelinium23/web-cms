import ReactMarkdown from "react-markdown";
import { RichTextProps } from "./types";

export const RichText = ({ markdown }: RichTextProps) => {
  const markdownClassName = "text-xl text-[#9BBFD4]";

  return (
    <ReactMarkdown className={markdownClassName}>{markdown}</ReactMarkdown>
  );
};
