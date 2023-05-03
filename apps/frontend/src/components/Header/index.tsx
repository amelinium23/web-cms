import Image from "next/image";
import { Button } from "../Button";
import Link from "next/link";
import { useRouter } from "next/router";
import gears from "../../assets/gears.svg";
import { useHeader } from "@/hooks/useHeader";
import {
  buttonsContainerClassName,
  headerContainerClassName,
  logoContainerClassName,
  messageClassName,
  messageContainerClassName,
} from "./classNames";

export const Header = () => {
  const router = useRouter();
  const data = useHeader();
  const headerStyle = { boxShadow: "0px 2px 32px -12px rgba(0, 0, 0, 0.3)" };
  const isLoggedIn = router.route === "/settings";

  if (!data || !data.logo) return <></>;
  const { logo, message, buttons } = data;

  return (
    <div style={headerStyle} className={headerContainerClassName}>
      <div className={logoContainerClassName}>
        <Link href="/">
          <Image src={logo} alt="CloudDrive logo" height={40} width={250} />
        </Link>
      </div>
      {isLoggedIn ? (
        <div className={messageContainerClassName}>
          <div className={messageClassName}>{message}</div>
          <Link href="/settings">
            <Image src={gears} width={40} height={40} alt="arrow" />
          </Link>
        </div>
      ) : (
        <div className={buttonsContainerClassName}>
          {buttons.map((button) => (
            <Button
              key={`${button.content}-${button.backgroundColor}`}
              content={button.content}
              hoverColor={button.hoverColor}
              backgroundColor={button.backgroundColor}
              textColor={button.textColor}
              href={button.link as string}
            />
          ))}
        </div>
      )}
    </div>
  );
};
