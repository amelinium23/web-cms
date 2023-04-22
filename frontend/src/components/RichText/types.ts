import { ReactMarkdownOptions } from "react-markdown/lib/react-markdown";

export type RichTextProps = {
  markdown: string;
} & Omit<ReactMarkdownOptions, "children">;
