import { IntegrationProps } from "./types";

export const Integration = ({ integration }: IntegrationProps) => {
  return (
    <div
      className="flex flex-row gap-2 w-[30%] justify-center items-center hover:cursor-pointer p-2 hover:shadow-lg"
      key={integration.name}
    >
      {integration.icon && <div className="w-6 h-6">{integration.icon}</div>}
      <p className="text-md text-[#055F94] font-semibold">{integration.name}</p>
    </div>
  );
};
