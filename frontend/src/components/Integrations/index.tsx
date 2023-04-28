import Image from "next/image";
import { Input } from "../Input";
import { Integration } from "./components/Integration";
import { checkMark } from "@/assets";
import { Integrations as TIntegrations } from "@/types";
import {
  integrationContainerClassName,
  integrationsClassName,
  proposedIntegrationsClassName,
  subSectionClassName,
  subTitleClassName,
  titleClassName,
} from "./classNames";

export const Integrations = ({
  integrations,
}: {
  integrations: TIntegrations;
}) => {
  if (!integrations) return <></>;

  const { input, title, proposedIntegrations, enabledIntegrations } =
    integrations;
  const addedIntegrations = enabledIntegrations.map((integration) => ({
    ...integration,
    icon: <Image src={checkMark} alt="check-mark" height={20} />,
  }));

  return (
    <div className={integrationsClassName}>
      <h2 className={titleClassName}>{title}</h2>
      <Input
        label={input.label}
        placeholder={input.placeholder}
        type={input.type}
      />
      <div className={integrationContainerClassName}>
        <div className={subSectionClassName}>
          <h4 className={subTitleClassName}>Dodano</h4>
          {addedIntegrations.map((integration) => (
            <Integration key={integration.name} integration={integration} />
          ))}
        </div>
        <div className={subSectionClassName}>
          <h4 className={subTitleClassName}>Proponowane</h4>
          <div className={proposedIntegrationsClassName}>
            {proposedIntegrations.map((integration) => (
              <Integration key={integration.name} integration={integration} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
