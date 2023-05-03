import Image from 'next/image';
import React from 'react';

import { checkMark, xMark } from '@/assets';

import {
  priceContainerClassName,
  settingsPageContainerClassName,
  settingsPagePricesContainerClassName,
  titleClassName,
} from './classNames';
import { PriceItem } from './components/Price';
import { PriceListProps } from './types';

export const PriceList = ({ isHomePage, prices }: PriceListProps) => {
  return isHomePage ? (
    <div className={priceContainerClassName}>
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
    <div className={settingsPageContainerClassName}>
      <h2 className={titleClassName}>Cennik</h2>
      <div className={settingsPagePricesContainerClassName}>
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
