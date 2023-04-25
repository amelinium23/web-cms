import { PriceItemProps } from "./types";

export const PriceItem = ({
  title,
  features,
  backgroundColor,
  textColor,
  children,
  enabledIcon,
  disabledIcon,
}: PriceItemProps) => {
  const containerStyle =
    backgroundColor || textColor
      ? { backgroundColor: backgroundColor, color: textColor }
      : undefined;

  const textStyle = textColor ? { color: textColor } : undefined;

  return (
    <div
      style={containerStyle}
      className="flex flex-col w-full p-6 gap-4 rounded-3xl"
    >
      <h3 style={textStyle} className="text-xl font-semibold  text-center">
        {title}
      </h3>
      {features.map((feature) => (
        <div className="flex flex-row gap-2 h-6" key={feature.feature}>
          <p style={textStyle} className="text-md">
            {feature.isAvailable ? enabledIcon : disabledIcon} {feature.feature}
          </p>
        </div>
      ))}
      <div className="flex flex-col w-full h-12 justify-center items-center">
        {children}
      </div>
    </div>
  );
};
