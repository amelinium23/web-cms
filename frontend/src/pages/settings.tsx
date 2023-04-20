import { Integrations } from "@/components/Integrations";
import { Page } from "@/components/Page";
import { PriceList } from "@/components/PriceList";
import { Sidebar } from "@/components/Sidebar";

export default function Settings() {
  return (
    <Page title="Ustawienia">
      <div className="flex flex-row gap-20 mt-1/12">
        <Sidebar />
        <div className="flex flex-col gap-8">
          <Integrations />
          <PriceList />
        </div>
      </div>
    </Page>
  );
}
