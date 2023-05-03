import {
  inputClassName,
  inputContainerClassName,
  labelClassName,
} from './classNames';
import { InputProps } from './types';

export const Input = ({ id, label, type, ...inputProps }: InputProps) => {
  return (
    <div className={inputContainerClassName}>
      <label htmlFor={id} className={labelClassName}>
        {label}
      </label>
      <input id={id} className={inputClassName} type={type} {...inputProps} />
    </div>
  );
};
