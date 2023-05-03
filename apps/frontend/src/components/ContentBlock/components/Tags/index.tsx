import { tagListClassName } from './classNames';
import { TagTile } from './components/TagTile';
import { TagListProps } from './types';

export const TagsList = ({ tags }: TagListProps) => {
  if (!tags) return <></>;

  return (
    <div className={tagListClassName}>
      {tags.map((tag) => (
        <TagTile key={tag.id} tag={tag} />
      ))}
    </div>
  );
};
