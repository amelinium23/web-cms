import { PriceItemProps } from "./types";

export const PriceItem = ({ title, features, children }: PriceItemProps) => {
  return (
    <div className="flex flex-col w-full p-6 bg-[#E6EEE6] gap-4 rounded-3xl">
      <h3 className="text-xl font-semibold text-[#004106] text-center">
        {title}
      </h3>
      {features.map((feature) => (
        <div className="flex flex-row gap-2 h-6" key={feature.feature}>
          <p className="text-md text-[#004106]">{feature.feature}</p>
        </div>
      ))}
      <div className="flex flex-col w-full h-12 justify-center items-center">
        {children}
      </div>
    </div>
  );
};
