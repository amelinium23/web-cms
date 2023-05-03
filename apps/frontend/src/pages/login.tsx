import { Button } from "@/components";
import { Input } from "@/components/Input";
import { Page } from "@/components/Page";
import { useLoginPage } from "@/hooks";
import { useRouter } from "next/router";
import { FormEvent } from "react";

export default function Login() {
  const router = useRouter();
  const style = { boxShadow: "0px 2px 32px -12px rgba(0, 0, 0, 0.3)" };

  const data = useLoginPage();
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push("/settings");
  };

  if (!data) return <></>;
  const { inputs, buttons, header } = data;

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
          {inputs.map((input: any) => (
            <Input key={input.label} id={input.label} {...input} />
          ))}
          <div className="flex flex-col w-60 gap-3">
            {buttons.map((button: any) => (
              <Button key={button.content} href={button.link} {...button} />
            ))}
          </div>
        </form>
      </div>
    </Page>
  );
}
