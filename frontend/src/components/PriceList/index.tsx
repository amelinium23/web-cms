import React from "react";
import { PriceItem } from "./components/Price";
import { PriceListProps } from "./types";

export const PriceList = ({ isHomePage, prices }: PriceListProps) => {
  return isHomePage ? (
    <div className="flex w-full flex-row gap-6 bg-white">
      {prices.map((price) => (
        <PriceItem
          key={price.name}
          title={price.name}
          features={price.features}
        />
      ))}
    </div>
  ) : (
    <div className="flex flex-col w-full gap-8 p-8 mt-8 bg-white border-2 rounded-3xl border-black">
      <h2 className="text-2xl font-bold">Cennik</h2>
      <div className="flex flex-row w-full gap-8 justify-around">
        {prices.map((price) => (
          <PriceItem
            key={price.name}
            title={price.name}
            features={price.features}
            backgroundColor={price.backgroundColor as `#${string}`}
            textColor={price.textColor as `#${string}`}
          />
        ))}
      </div>
    </div>
  );
};
