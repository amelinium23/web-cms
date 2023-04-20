import Link from "next/link";
import { HTMLProps } from "react";

type ButtonProps = {
  backgroundColor: string;
  textColor: string;
  hoverColor: string;
  content: string;
  href?: string;
} & Omit<HTMLProps<HTMLButtonElement>, "type">;

export const Button = ({
  backgroundColor,
  textColor,
  hoverColor,
  content,
  href,
  ...props
}: ButtonProps) => {
  const realTextColor = textColor.startsWith("#")
    ? `text-[${textColor}]`
    : `text-${textColor}`;
  const buttonContent = href ? <Link href={href}>{content}</Link> : content;
  const className = `flex h-10 justify-center font-bold items-center rounded-xl px-2 ${realTextColor} hover:bg-[#9BBFD4] bg-[${backgroundColor}] text-md hover:cursor-pointer text-center disabled:bg-[#9BBFD4] hover:shadow-lg`;

  return (
    <button className={className} {...props}>
      {buttonContent}
    </button>
  );
};
