import { Button } from '@/components';
import { ContentBlock } from '@/components/ContentBlock';
import { Page } from '@/components/Page';
import { PriceList } from '@/components/PriceList';
import { useSettingsPage } from '@/hooks';
import { useHomePage } from '@/hooks/useHomePage/useHomePage';

export default function Home() {
  const data = useHomePage();
  const settingsPageData = useSettingsPage();

  if (!data || !settingsPageData) return <></>;
  const { header, content } = data;
  const { prices } = settingsPageData;

  return (
    <Page title={header.title || 'CloudDrive'}>
      <main
        style={{ maxWidth: '1300px' }}
        className="m-auto flex h-full flex-col items-center justify-center gap-10 p-20"
      >
        {content.slice(0, 1).map((contentBlock: any) => (
          <ContentBlock
            key={contentBlock.title}
            imageSrc={contentBlock.image}
            title={contentBlock.title}
            description={contentBlock.description}
            tags={contentBlock.tags}
            imageLeft={contentBlock.imageLeft}
          >
            <Button
              href="/"
              hoverColor="#055F94"
              backgroundColor="white"
              content="Czytaj dalej"
              textColor="#055F94"
            />
          </ContentBlock>
        ))}
        {content.slice(1, 2).map((contentBlock: any) => (
          <ContentBlock
            imageSrc={contentBlock.image}
            key={contentBlock.title}
            title={contentBlock.title}
            description={contentBlock.description}
            tags={contentBlock.tags}
            imageLeft={contentBlock.imageLeft}
          />
        ))}
        <div
          id="prices"
          style={{ width: '1130px' }}
          className="mx-auto flex flex-col items-center justify-center"
        >
          <PriceList prices={prices} isHomePage />
        </div>
        {content.slice(2).map((contentBlock: any) => (
          <ContentBlock
            imageSrc={contentBlock.image}
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
