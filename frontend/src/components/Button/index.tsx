import Link from "next/link";

type ButtonProps = {
  backgroundColor: string;
  textColor: string;
  hoverColor: string;
  text: string;
  href?: string;
};

export const Button = ({
  backgroundColor,
  textColor,
  hoverColor,
  text,
  href,
}: ButtonProps) => {
  const realTextColor = textColor.startsWith("#")
    ? `text-[${textColor}]`
    : `text-${textColor}`;

  const content = href ? <Link href={href}>{text}</Link> : text;

  const className = `flex h-10 justify-center font-bold items-center rounded-xl px-2 ${realTextColor} hover:bg-[${hoverColor}] bg-[${backgroundColor}] text-md hover:cursor-pointer text-center`;
  return <div className={className}>{content}</div>;
};
