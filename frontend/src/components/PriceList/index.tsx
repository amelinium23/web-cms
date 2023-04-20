import React from "react";
import { PriceItem } from "./components/Price";

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
          <PriceItem title="Pakiet Light" features={features} />
        </div>
        <div className="flex flex-col w-full p-6 bg-[#E6EEE6] gap-4 rounded-3xl">
          <PriceItem title="Pakiet Light" features={features} />
        </div>
        <div className="flex flex-col w-full p-6 bg-[#E6EEE6] gap-4 rounded-3xl">
          <PriceItem title="Pakiet Pro" features={features} />
        </div>
      </div>
    </div>
  );
};
