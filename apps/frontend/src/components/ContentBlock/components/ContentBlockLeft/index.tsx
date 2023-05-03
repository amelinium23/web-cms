import Image from 'next/image';
import React from 'react';

import { RichText } from '@/components/RichText';

import {
  contentBlockClassName,
  imageContainerClassName,
  shadowStyle,
  tagContainerClassName,
  textContainerClassName,
  titleClassName,
} from '../../constants';
import { ContentBlockProps } from '../../types';
import { TagsList } from '../Tags';

export const ContentBlockLeft = ({
  title,
  description,
  children,
  imageSrc,
  tags,
}: ContentBlockProps) => {
  if (!tags) return <></>;

  return (
    <div className={contentBlockClassName}>
      <div className={imageContainerClassName}>
        <Image src={imageSrc} width={300} height={300} alt="placeholder" />
      </div>
      <div style={shadowStyle} className={textContainerClassName}>
        <h2 className={titleClassName}>{title}</h2>
        <RichText markdown={description} />
        <div className={tagContainerClassName}>
          <TagsList tags={tags} />
        </div>
        {children}
      </div>
    </div>
  );
};
