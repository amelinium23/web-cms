import { ContentBlockProps } from "../../types";

export const ContentBlockRight = ({
  title,
  description,
}: ContentBlockProps) => {
  return (
    <div className="flex h-full flex-row gap-4">
      <div className="flex w-full p-4 flex-col gap-4 flex-wrap">
        <h2 className="text-3xl">{title}</h2>
        <p className="text-lg">{description}</p>
      </div>
      <div className="flex w-full p-4 flex-col gap-4 items-center justify-center flex-wrap">
        image
      </div>
    </div>
  );
};
