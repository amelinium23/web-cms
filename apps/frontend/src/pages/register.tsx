import { Button } from "@/components";
import { Input } from "@/components/Input";
import { Page } from "@/components/Page";
import { useRegisterPage } from "@/hooks";
import { useRouter } from "next/router";
import { FormEvent } from "react";

export default function Register() {
  const router = useRouter();
  const style = { boxShadow: "0px 2px 32px -12px rgba(0, 0, 0, 0.3)" };

  const data = useRegisterPage();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push("/settings");
  };

  if (!data) return <></>;
  const { header, inputs, button } = data;

  return (
    <Page title={header.title}>
      <div className="flex items-center h-screen justify-center">
        <form
          style={style}
          onSubmit={onSubmit}
          className="flex flex-col gap-5 w-[500px] mx-auto self-center items-center p-10 justify-center rounded-[24px]"
        >
          <div className="text-2xl font-bold text-[#055F94]">
            {header.title}
          </div>
          {inputs.map((input) => (
            <Input
              key={input.id}
              label={input.label}
              placeholder={input.placeholder}
              type={input.type}
            />
          ))}
          <div className="flex flex-col w-60 gap-3">
            <Button
              content={button.content}
              hoverColor="#E6EFF4"
              backgroundColor="#055F94"
              textColor="white"
              onClick={onSubmit}
              href=""
            />
          </div>
        </form>
      </div>
    </Page>
  );
}