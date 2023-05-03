import { useRouter } from 'next/router';
import { FormEvent } from 'react';

import { Button } from '@/components';
import { Input } from '@/components/Input';
import { Page } from '@/components/Page';
import { useRegisterPage } from '@/hooks';

export default function Register() {
  const router = useRouter();
  const style = { boxShadow: '0px 2px 32px -12px rgba(0, 0, 0, 0.3)' };

  const data = useRegisterPage();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push('/settings');
  };

  if (!data) return <></>;
  const { header, inputs, button } = data;

  return (
    <Page title={header.title}>
      <div className="flex h-screen items-center justify-center">
        <form
          style={style}
          onSubmit={onSubmit}
          className="mx-auto flex w-[500px] flex-col items-center justify-center gap-5 self-center rounded-[24px] p-10"
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
          <div className="flex w-60 flex-col gap-3">
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
