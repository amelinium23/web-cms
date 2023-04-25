import { Button } from "@/components";
import { Input } from "@/components/Input";
import { Page } from "@/components/Page";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/router";
import { FormEvent } from "react";

export default function Login() {
  const router = useRouter();
  const style = { boxShadow: "0px 2px 32px -12px rgba(0, 0, 0, 0.3)" };

  const { data: cmsData } = useQuery({
    queryKey: ["login"],
    queryFn: () =>
      axios
        .get("http://localhost:1337/api/login-page?populate=deep")
        .then((res) => res.data),
  });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push("/settings");
  };

  if (!cmsData) return <></>;
  const { data } = cmsData;
  const { attributes } = data;
  const { inputs, buttons, header } = attributes;

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
          {inputs.map(
            (input: { label: string; placeholder: string; type: string }) => (
              <Input key={input.label} id={input.label} {...input} />
            )
          )}
          <div className="flex flex-col w-60 gap-3">
            {buttons.map(
              (button: {
                backgroundColor: string;
                hoverColor: string;
                textColor: string;
                content: string;
                link: string;
              }) => (
                <Button key={button.content} href={button.link} {...button} />
              )
            )}
          </div>
        </form>
      </div>
    </Page>
  );
}
