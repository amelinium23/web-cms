import React from "react";

export const PriceList = () => {
  const features = [
    { feature: "Darmowe 5 GB dostępnego miejsca", isAvailable: true },
    { feature: "Udostępnianie linków znajomym", isAvailable: true },
    { feature: "Tworzenie workspaces", isAvailable: true },
    { feature: "Asystent AI", isAvailable: false },
  ];

  return (
    <div className="flex flex-col w-[77vw] gap-8 p-8 mt-8 bg-white border-2 rounded-3xl border-black">
      <h2 className="text-2xl font-bold">Cennik</h2>
      <div className="flex flex-row w-full gap-8 justify-around">
        <div className="flex flex-col w-full p-6 bg-[#E6EEE6] gap-4 rounded-3xl">
          <h3 className="text-xl font-semibold text-[#004106] text-center">
            Pakiet Light
          </h3>
          {features.map((feature) => (
            <div className="flex flex-row gap-2 h-6" key={feature.feature}>
              <p className="text-md text-[#004106]">{feature.feature}</p>
            </div>
          ))}
          <div className="flex flex-col w-full h-12 justify-center items-center">
            <p className="text-2xl text-[#004106] font-semibold">0zł</p>
          </div>
        </div>
        <div className="flex flex-col w-full p-6 bg-[#E6EEE6] gap-4 rounded-3xl">
          <h3 className="text-xl font-semibold text-[#004106] text-center">
            Pakiet Light
          </h3>
          {features.map((feature) => (
            <div className="flex flex-row gap-2 h-6" key={feature.feature}>
              <p className="text-md text-[#004106]">{feature.feature}</p>
            </div>
          ))}
          <div className="flex flex-col w-full h-12 justify-center items-center">
            <p className="text-2xl text-[#004106] font-semibold">0zł</p>
          </div>
        </div>
        <div className="flex flex-col w-full p-6 bg-[#E6EEE6] gap-4 rounded-3xl">
          <h3 className="text-xl font-semibold text-[#004106] text-center">
            Pakiet Light
          </h3>
          {features.map((feature) => (
            <div className="flex flex-row gap-2 h-6" key={feature.feature}>
              <p className="text-md text-[#004106]">{feature.feature}</p>
            </div>
          ))}
          <div className="flex flex-col w-full h-12 justify-center items-center">
            <p className="text-2xl text-[#004106] font-semibold">0zł</p>
          </div>
        </div>
      </div>
    </div>
  );
};
