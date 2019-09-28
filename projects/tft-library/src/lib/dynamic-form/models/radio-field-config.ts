import { DynamicFieldConfig } from './dynamic-field-config';
import { OptionsType, ReactiveOptionsConfig } from './select-field-config';

export interface RadioFieldConfig extends DynamicFieldConfig {
  emptyOptionsMessage?: string;
  reactiveOptionsConfig: ReactiveOptionsConfig;
  multiple?: boolean;
  options: OptionsType;
  block?: boolean;
}

export interface RadioOption {
  label: string;
  value: any;
}
