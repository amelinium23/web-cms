import ReactMarkdown from "react-markdown";
import { RichTextProps } from "./types";

export const RichText = ({ markdown }: RichTextProps) => {
  return (
    <ReactMarkdown className="text-lg text-[#9BBFD4]">{markdown}</ReactMarkdown>
  );
};
