import { Button } from "@/components";
import { ContentBlock } from "@/components/ContentBlock";
import { Page } from "@/components/Page";
import { PriceList } from "@/components/PriceList";

export default function Home() {
  return (
    <Page title="CloudDrive">
      <main className="flex flex-col h-full w-full justify-center items-center gap-10 px-20 py-20 my-auto mx-auto">
        <ContentBlock
          title="Bezpiecznie przechowuj swoje pliki już dziś!"
          description="Dzięki Cloudrive możesz mieć swobodny dostęp do swoich plików z każdego miejsca na świecie!"
        >
          <Button
            backgroundColor="white"
            content="Czytaj dalej"
            textColor="#055F94"
          />
        </ContentBlock>
        <div className="flex flex-col w-[69%] items-center justify-center mx-auto">
          <PriceList isHomePage />
        </div>
        <ContentBlock
          title="Bezpiecznie przechowuj swoje pliki już dziś!"
          description="Dzięki Cloudrive możesz mieć swobodny dostęp do swoich plików z każdego miejsca na świecie!"
          imageLeft
        />
        <ContentBlock
          title="Bezpiecznie przechowuj swoje pliki już dziś!"
          description="Dzięki Cloudrive możesz mieć swobodny dostęp do swoich plików z każdego miejsca na świecie!"
        />
        <ContentBlock
          title="Bezpiecznie przechowuj swoje pliki już dziś!"
          description="Dzięki Cloudrive możesz mieć swobodny dostęp do swoich plików z każdego miejsca na świecie!"
          imageLeft
        />
        <ContentBlock
          title="Bezpiecznie przechowuj swoje pliki już dziś!"
          description="Dzięki Cloudrive możesz mieć swobodny dostęp do swoich plików z każdego miejsca na świecie!"
        />
      </main>
    </Page>
  );
}
