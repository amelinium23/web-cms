import { Integrations } from "@/components/Integrations";
import { Page } from "@/components/Page";
import { PriceList } from "@/components/PriceList";
import { Sidebar } from "@/components/Sidebar";
import { useSettingsPage } from "@/hooks";

export default function Settings() {
  const data = useSettingsPage();

  if (!data) return <></>;

  return (
    <Page title={data.header.title}>
      <div className="flex flex-row gap-20 mt-1/12">
        <Sidebar sidebar={data.sidebar} />
        <div className="flex flex-col gap-8">
          <Integrations />
          <PriceList />
        </div>
      </div>
    </Page>
  );
}
