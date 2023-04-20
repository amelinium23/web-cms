import { Integrations } from "@/components/Integrations";
import { Page } from "@/components/Page";
import { Sidebar } from "@/components/Sidebar";

export default function Settings() {
  return (
    <Page title="Ustawienia">
      <div className="flex flex-row gap-20 h-[93%] mt-0">
        <Sidebar />
        <Integrations />
      </div>
    </Page>
  );
}
