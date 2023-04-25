import Image from "next/image";
import { Input } from "../Input";
import { Integration } from "./components/Integration";
import { checkMark } from "@/assets";

export const Integrations = () => {
  const addedIntegrations = [
    {
      name: "Google Docs",
      icon: <Image src={checkMark} alt="check-mark" height={20} />,
    },
    {
      name: "Google Sheets",
      icon: <Image src={checkMark} alt="check-mark" height={20} />,
    },
    {
      name: "Google Slides",
      icon: <Image src={checkMark} alt="check-mark" height={20} />,
    },
  ];

  const proposedIntegrations = [
    { name: "Dropbox" },
    { name: "WeTransfer" },
    { name: "Lumio" },
    { name: "Google Forms" },
    { name: "Google Maps" },
  ];

  return (
    <div className="flex flex-col w-full gap-8 p-8 mt-8 bg-white border-2 rounded-3xl border-black">
      <h2 className="text-2xl font-bold">Integracje</h2>
      <Input
        label="Wyszkaj integracje"
        placeholder="Wyszukaj integracje"
        type="text"
      />
      <div className="flex w-full flex-row gap-9">
        <div className="flex w-[40%] flex-col gap-2">
          <h4 className="text-sm font-semibold text-[#055F94]">Dodano</h4>
          {addedIntegrations.map((integration) => (
            <Integration key={integration.name} integration={integration} />
          ))}
        </div>
        <div className="flex w-[40%] flex-col gap-2">
          <h4 className="text-sm font-semibold text-[#055F94]">Proponowane</h4>
          <div className="flex flex-row flex-wrap gap-4">
            {proposedIntegrations.map((integration) => (
              <Integration key={integration.name} integration={integration} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
