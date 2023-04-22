import { Button } from "@/components";
import { Input } from "@/components/Input";
import { Page } from "@/components/Page";
import { useRouter } from "next/router";
import { FormEvent } from "react";

export default function Login() {
  const router = useRouter();
  const style = { boxShadow: "0px 2px 32px -12px rgba(0, 0, 0, 0.3)" };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push("/settings");
  };

  return (
    <Page title="Logowanie">
      <div className="flex items-center h-screen justify-center">
        <form
          style={style}
          onSubmit={onSubmit}
          className="flex flex-col gap-5 w-[500px] mx-auto self-center items-center p-10 justify-center rounded-[24px]"
        >
          <div className="text-2xl font-bold text-[#055F94]">Logowanie</div>
          <Input
            id="login"
            label="Login"
            placeholder="Wpisz login"
            type="text"
          />
          <Input
            id="password"
            label="Hasło"
            placeholder="Wpisz hasło"
            type="password"
          />
          <div className="flex flex-col w-60 gap-3">
            <Button
              content="Zaloguj"
              hoverColor="#E6EFF4"
              backgroundColor="#055F94"
              textColor="white"
              href="/settings"
            />
            <Button
              content="Nie pamiętam hasła"
              hoverColor="#E6EFF4"
              backgroundColor="#FFFFFF"
              textColor="#055F94"
              href="/"
            />
          </div>
        </form>
      </div>
    </Page>
  );
}
