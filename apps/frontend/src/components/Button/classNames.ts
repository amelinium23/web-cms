export const buttonTextClassName = (textColor: `#${string}`) =>
  `text-md text-center text-[${textColor}] text-${textColor} font-bold`;

export const generateButtonContainerClassName = (hoverColor: `#${string}`) =>
  `flex gap-2 h-10 justify-center items-center rounded-xl px-2 hover:bg-[${hoverColor}] disabled:bg-[#9BBFD4] hover:shadow-lg border border-gray-50`;
