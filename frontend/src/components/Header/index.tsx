import Image from "next/image";
import { Button } from "../Button";
import Link from "next/link";
import { useRouter } from "next/router";
import gears from "../../assets/gears.svg";
import { ReactNode } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const Header = () => {
  const router = useRouter();
  const { data: cmsData, isLoading } = useQuery({
    queryKey: ["header"],
    queryFn: () =>
      axios
        .get("http://localhost:1337/api/header?populate=deep")
        .then((res) => res.data),
  });
  const headerStyle = { boxShadow: "0px 2px 32px -12px rgba(0, 0, 0, 0.3)" };
  const isLoggedIn = router.route === "/settings";

  if (!cmsData && isLoading) return <></>;
  const { data } = cmsData;
  const { attributes } = data;
  const { buttons, logo, message } = attributes;

  if (!attributes || !logo) return <></>;

  return (
    <div
      style={headerStyle}
      className="flex w-[90] h-19 px-4 py-4 justify-around items-center"
    >
      <div className="flex w-full h-10 text-lg justify-start items-center">
        <Link href="/">
          <Image
            src={"http://localhost:1337" + logo.data.attributes.url}
            alt="CloudDrive logo"
            height={40}
            width={250}
          />
        </Link>
      </div>
      {isLoggedIn ? (
        <div className="flex justify-end w-full items-center gap-5">
          <div className="text-md font-sans font-semibold">{message}</div>
          <Link href="/settings">
            <Image src={gears} width={40} height={40} alt="arrow" />
          </Link>
        </div>
      ) : (
        <div className="flex justify-start items-start gap-5">
          {buttons.map(
            (button: {
              backgroundColor: string;
              textColor: string;
              hoverColor?: string;
              content: string;
              href?: string;
              icon?: ReactNode;
            }) => (
              <Button
                key={`${button.content}-${button.backgroundColor}`}
                content={button.content}
                hoverColor={button.hoverColor}
                backgroundColor={button.backgroundColor}
                textColor={button.textColor}
              />
            )
          )}
        </div>
      )}
    </div>
  );
};
