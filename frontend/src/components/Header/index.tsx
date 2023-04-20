import { Button } from "../Button";

export const Header = () => {
  return (
    <div className="flex w-full h-20 px-4 py-3 justify-around ">
      <div className="flex w-full h-10 text-lg justify-start items-center">
        logo
      </div>
      <div className="flex justify-start items-start gap-5">
        <Button
          text="FAQ"
          hoverColor="#E6EFF4"
          backgroundColor="#FFFFFF"
          textColor="black"
        />
        <Button
          text="Cennik"
          hoverColor="#E6EFF4"
          backgroundColor="#FFFFFF"
          textColor="#000000"
        />
        <Button
          text="Rejestracja"
          hoverColor="#E6EFF4"
          backgroundColor="#E6EFF4"
          textColor="#055F94"
          href="/register"
        />
        <Button
          text="Logowanie"
          hoverColor="#E6EFF4"
          backgroundColor="#055F94"
          textColor="white"
          href="/login"
        />
      </div>
    </div>
  );
};
