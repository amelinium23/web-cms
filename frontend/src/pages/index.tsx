import { Button } from "@/components";
import { ContentBlock } from "@/components/ContentBlock";
import { Page } from "@/components/Page";
import { PriceList } from "@/components/PriceList";
import { useHomePage } from "@/hooks/useHomePage/useHomePage";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function Home() {
  const data = useHomePage();

  if (!data) return <></>;
  const { header, content } = data;

  return (
    <Page title={header.title}>
      <main
        style={{ maxWidth: "1300px" }}
        className="flex flex-col h-full justify-center items-center gap-10 px-20 py-20 my-auto mx-auto"
      >
        {content.slice(0, 2).map((contentBlock: any) => (
          <ContentBlock
            imageSrc={""}
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
        <div
          style={{ width: "1130px" }}
          className="flex flex-col items-center justify-center mx-auto"
        >
          <PriceList isHomePage />
        </div>
        {content.slice(2).map((contentBlock: any) => (
          <ContentBlock
            imageSrc={""}
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
