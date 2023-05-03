import ReactMarkdown from 'react-markdown';

import { markdownClassName } from './classNames';
import { RichTextProps } from './types';

export const RichText = ({ markdown }: RichTextProps) => {
  return (
    <ReactMarkdown className={markdownClassName}>{markdown}</ReactMarkdown>
  );
};
