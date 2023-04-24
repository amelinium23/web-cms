import { Button } from "@/components";
import { ContentBlock } from "@/components/ContentBlock";
import { Page } from "@/components/Page";
import { PriceList } from "@/components/PriceList";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function Home() {
  const { data: cmsData, isLoading } = useQuery({
    queryKey: ["home-page"],
    queryFn: () =>
      axios
        .get("http://localhost:1337/api/home-page?populate=deep")
        .then((res) => res.data),
  });

  if (isLoading) return null;

  if (!cmsData) return <></>;

  const { data } = cmsData;
  const { attributes } = data;
  const { header, content } = attributes;

  if (!header || !content) return <></>;

  return (
    <Page title={header.title}>
      <main className="flex flex-col h-full w-full justify-center items-center gap-10 px-20 py-20 my-auto mx-auto">
        {content.slice(0, 1).map((contentBlock: any) => (
          <ContentBlock
            imageSrc={contentBlock.image.data.attributes.url}
            key={contentBlock.title}
            title={contentBlock.title}
            description={contentBlock.description}
            tags={contentBlock.tags}
            imageLeft={contentBlock.imageLeft}
          >
            <Button
              backgroundColor="white"
              content="Czytaj dalej"
              textColor="#055F94"
            />
          </ContentBlock>
        ))}
        <div className="flex flex-col w-full items-center justify-center mx-auto">
          <PriceList isHomePage />
        </div>
        {content.slice(1).map((contentBlock: any) => (
          <ContentBlock
            imageSrc={contentBlock.image.data.attributes.url}
            key={contentBlock.title}
            title={contentBlock.title}
            description={contentBlock.description}
            tags={contentBlock.tags}
            imageLeft={contentBlock.imageLeft}
          />
        ))}
      </main>
    </Page>
  );
}
