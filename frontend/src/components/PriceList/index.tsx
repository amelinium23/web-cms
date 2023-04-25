import React from "react";
import { PriceItem } from "./components/Price";
import { PriceListProps } from "./types";
import Image from "next/image";
import { checkMark, xMark } from "@/assets";

export const PriceList = ({ isHomePage, prices }: PriceListProps) => {
  return isHomePage ? (
    <div className="flex w-full flex-row gap-6 bg-white">
      {prices.map((price) => (
        <PriceItem
          key={price.name}
          title={price.name}
          features={price.features}
          textColor={price.textColor as `#${string}`}
          backgroundColor={price.backgroundColor as `#${string}`}
          enabledIcon={
            <Image src={checkMark} alt="You got it" width={20} height={20} />
          }
          disabledIcon={
            <Image src={xMark} alt="You got it" width={20} height={20} />
          }
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
            enabledIcon={
              <Image src={checkMark} alt="You got it" width={20} height={20} />
            }
            disabledIcon={
              <Image src={xMark} alt="You got it" width={20} height={20} />
            }
          />
        ))}
      </div>
    </div>
  );
};
