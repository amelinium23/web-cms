import { IntegrationProps } from "./types";

export const Integration = ({ integration }: IntegrationProps) => {
  return (
    <div
      className="flex flex-row gap-2 w-[180px] justify-start items-center hover:cursor-pointer p-2 hover:shadow-lg rounded-xl"
      key={integration.name}
    >
      {integration.icon && <div>{integration.icon}</div>}
      <p className="text-md text-[#055F94] font-semibold">{integration.name}</p>
    </div>
  );
};
