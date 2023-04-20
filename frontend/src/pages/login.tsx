import { Button } from "@/components";

export default function Login() {
  const style = { boxShadow: "0px 2px 32px -12px rgba(0, 0, 0, 0.3)" };

  return (
    <div className="flex items-center h-[90%] justify-center">
      <div
        style={style}
        className="flex flex-col gap-5 w-[500px] mx-auto self-center items-center p-10 justify-center rounded-[24px]"
      >
        <div className="text-2xl font-semi-bold">Logowanie</div>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="login">Login</label>
          <input className="px-2 py-2" id="login" />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="login font-bold">Hasło</label>
          <input className="px-2 py-2" id="login" type="password" />
        </div>
        <div className="flex flex-col w-60 gap-3">
          <Button
            text="Zaloguj"
            hoverColor="#E6EFF4"
            backgroundColor="#055F94"
            textColor="white"
            href="/"
          />
          <Button
            text="Nie pamiętam hasła"
            hoverColor="#E6EFF4"
            backgroundColor="#FFFFFF"
            textColor="#055F94"
            href="/"
          />
        </div>
      </div>
    </div>
  );
}
