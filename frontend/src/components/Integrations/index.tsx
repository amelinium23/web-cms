import { Input } from "../Input";

export const Integrations = () => {
  const addedIntegrations = [
    { name: "Google Docs", icon: <></> },
    { name: "Google Sheets", icon: <></> },
    { name: "Google Slides", icon: <></> },
  ];

  const proposedIntegrations = [
    { name: "Google Docs", icon: <></> },
    { name: "Google Sheets", icon: <></> },
    { name: "Google Slides", icon: <></> },
    { name: "Google Slides", icon: <></> },
    { name: "Google Slides", icon: <></> },
    { name: "Google Slides", icon: <></> },
    { name: "Google Slides", icon: <></> },
    { name: "Google Slides", icon: <></> },
    { name: "Google Slides", icon: <></> },
    { name: "Google Slides", icon: <></> },
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
        <div className="flex w-[50%] flex-col gap-2">
          <h4 className="text-sm font-semibold text-[#055F94]">Dodano</h4>
          {addedIntegrations.map((integration) => (
            <div className="flex flex-row gap-2" key={integration.name}>
              <div className="w-6 h-6">{integration.icon}</div>
              <p className="text-md text-[#055F94] font-semibold">
                {integration.name}
              </p>
            </div>
          ))}
        </div>
        <div className="flex w-[40%] flex-col gap-2">
          <h4 className="text-sm font-semibold text-[#055F94]">Proponowane</h4>
          <div className="flex flex-row flex-wrap gap-4">
            {proposedIntegrations.map((integration) => (
              <div className="flex flex-row gap-2" key={integration.name}>
                <p className="text-md text-[#055F94] font-semibold">
                  {integration.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
