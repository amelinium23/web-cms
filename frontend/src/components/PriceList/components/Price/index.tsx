import {
  childrenContainerClassName,
  featureContainerClassName,
  priceItemClassName,
  textClassName,
  titleClassName,
} from "./classNames";
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
    <div style={containerStyle} className={priceItemClassName}>
      <h3 style={textStyle} className={titleClassName}>
        {title}
      </h3>
      {features.map((feature) => (
        <div className={featureContainerClassName} key={feature.feature}>
          {feature.isAvailable ? enabledIcon : disabledIcon}
          <p style={textStyle} className={textClassName}>
            {feature.feature}
          </p>
        </div>
      ))}
      <div className={childrenContainerClassName}>{children}</div>
    </div>
  );
};
