import { Button } from "@/components";
import { Input } from "@/components/Input";
import { Page } from "@/components/Page";
import { useRouter } from "next/router";
import { FormEvent } from "react";

export default function Register() {
  const router = useRouter();
  const style = { boxShadow: "0px 2px 32px -12px rgba(0, 0, 0, 0.3)" };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push("/settings");
  };

  return (
    <Page title="Rejestracja">
      <div className="flex items-center h-screen justify-center">
        <form
          style={style}
          onSubmit={onSubmit}
          className="flex flex-col gap-5 w-[500px] mx-auto self-center items-center p-10 justify-center rounded-[24px]"
        >
          <div className="text-2xl font-bold text-[#055F94]">Rejestracja</div>
          <Input id="name" label="Imię" placeholder="Wpisz imię" type="text" />
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
          <Input
            id="password"
            label="Powtórz hasło"
            placeholder="Wpisz hasło"
            type="password"
          />
          <div className="flex flex-col w-60 gap-3">
            <Button
              content="Zarejestruj"
              hoverColor="#E6EFF4"
              backgroundColor="#055F94"
              textColor="white"
              onClick={onSubmit}
            />
          </div>
        </form>
      </div>
    </Page>
  );
}
