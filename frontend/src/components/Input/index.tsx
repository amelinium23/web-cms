import { HTMLAttributes } from "react";

export const Input = ({
  id,
  label,
  type,
  ...inputProps
}: { label: string; type: string } & HTMLAttributes<HTMLInputElement>) => {
  return (
    <div className="flex flex-col w-full gap-2">
      <label
        htmlFor={label}
        className="text-md text-[#9BBFD4] invalid:text-[#B99C99] font-bold"
      >
        {label}
      </label>
      <input
        className="flex gap-3 py-2 px-3 text-[#9BBFD4] bg-white text-md rounded-lg border border-solid border-1-[#9BBFD4] focus:bg-[#E6EFF4] focus:outline-none invalid:outline-[#B99C99] border-[#9BBFD4] "
        type={type}
        {...inputProps}
      />
    </div>
  );
};
