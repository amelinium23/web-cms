import Link from "next/link";
import { HTMLProps, ReactNode, ReactSVGElement } from "react";
import {
  buttonTextClassName,
  generateButtonContainerClassName,
} from "./classNames";

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
    color: textColor,
  };
  const textClassName = buttonTextClassName(textColor as `#${string}`);
  const buttonContent = href ? (
    <Link className={textClassName} href={href}>
      {content}
    </Link>
  ) : (
    <p className={textClassName}>{content}</p>
  );
  const buttonContainerClassName = generateButtonContainerClassName(
    hoverColor as `#${string}`
  );

  return (
    <button style={style} className={buttonContainerClassName} {...props}>
      {icon && icon}
      {buttonContent}
    </button>
  );
};
