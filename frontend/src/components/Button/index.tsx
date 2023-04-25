import Link from "next/link";
import { HTMLProps, ReactNode, ReactSVGElement } from "react";

type ButtonProps = {
  backgroundColor: string;
  textColor: string;
  hoverColor: string | null;
  href: string | null;
  content: string;
  icon?: ReactNode;
} & Omit<HTMLProps<HTMLButtonElement>, "type">;

export const Button = ({
  backgroundColor,
  textColor,
  hoverColor,
  content,
  href,
  icon,
  ...props
}: ButtonProps) => {
  const style = {
    backgroundColor: backgroundColor,
  };

  const buttonContent = href ? (
    <Link
      style={{ color: textColor }}
      className={`text-md text-center font-bold`}
      href={href}
    >
      {content}
    </Link>
  ) : (
    <p style={{ color: textColor }} className={`text-md text-center font-bold`}>
      {content}
    </p>
  );

  const className = `flex gap-2 h-10  justify-center items-center rounded-xl px-2 hover:bg-[${hoverColor}] disabled:bg-[#9BBFD4] hover:shadow-lg`;

  return (
    <button style={style} className={className} {...props}>
      {icon && icon}
      {buttonContent}
    </button>
  );
};
