import { integrationItemClassName, textClassName } from './classNames';
import { IntegrationProps } from './types';

export const Integration = ({ integration }: IntegrationProps) => {
  return (
    <div className={integrationItemClassName} key={integration.name}>
      {integration.icon && <div>{integration.icon}</div>}
      <p className={textClassName}>{integration.name}</p>
    </div>
  );
};
