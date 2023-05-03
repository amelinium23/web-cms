import Image from 'next/image';

import { checkMark } from '@/assets';

import { tagTileClassName } from './classNames';
import { TagTileProps } from './types';

export const TagTile = ({ tag }: TagTileProps) => {
  const tagStyle = {
    color: tag.textColor,
    backgroundColor: tag.backgroundColor,
  };

  return (
    <div style={tagStyle} className={tagTileClassName}>
      <Image src={checkMark} width={20} height={20} alt="check-mark" />
      {tag.name}
    </div>
  );
};
