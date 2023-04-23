import Image from "next/image";
import { Button } from "../Button";
import logo from "../../assets/logo.svg";
import Link from "next/link";
import { useRouter } from "next/router";
import gears from "../../assets/gears.svg";
import { useHeader } from "@/hooks/useHeader";

export const Header = () => {
  const router = useRouter();
  const data = useHeader();
  const headerStyle = { boxShadow: "0px 2px 32px -12px rgba(0, 0, 0, 0.3)" };

  const isLoggedIn = router.route === "/settings";
  console.debug(data);

  return (
    <div
      style={headerStyle}
      className="flex w-[90] h-19 px-4 py-4 justify-around items-center"
    >
      <div className="flex w-full h-10 text-lg justify-start items-center">
        <Link href="/">
          <Image src={logo} alt="CloudDrive logo" height={40} width={250} />
        </Link>
      </div>
      {isLoggedIn ? (
        <div className="flex justify-end w-full items-center gap-5">
          <div className="text-md font-sans font-semibold">Cześć, Jacku!</div>
          <Link href="/settings">
            <Image src={gears} width={40} height={40} alt="arrow" />
          </Link>
        </div>
      ) : (
        <div className="flex justify-start items-start gap-5">
          <Button
            content="FAQ"
            hoverColor="#E6EFF4"
            backgroundColor="#FFFFFF"
            textColor="black"
          />
          <Button
            content="Cennik"
            hoverColor="#E6EFF4"
            backgroundColor="#FFFFFF"
            textColor="black"
          />
          <Button
            content="Rejestracja"
            hoverColor="#E6EFF4"
            backgroundColor="#E6EFF4"
            textColor="#055F94"
            href="/register"
          />
          <Button
            content="Logowanie"
            hoverColor="#E6EFF4"
            backgroundColor="#055F94"
            textColor="white"
            href="/login"
          />
        </div>
      )}
    </div>
  );
};
