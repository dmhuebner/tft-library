import { DynamicFieldConfig } from '../dynamic-field-config';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

export interface RadioFieldConfig extends DynamicFieldConfig {
  emptyOptionsMessage?: string;
  reactiveOptionsConfig: ReactiveOptionsConfig;
  multiple?: boolean;
  options: OptionsType;
  block?: boolean;
}

export type OptionsType = RadioOption[] | Observable<RadioOption[]> | OptionsCallback | ReactiveOptionsCallback;

export type OptionsCallback = () => Promise<RadioOption[]>
export type ReactiveOptionsCallback =  (group?: FormGroup, config?: ReactiveOptionsConfig) => Observable<RadioOption[]>
export interface RadioOption {
  label: string;
  value: any;
}


export interface ReactiveOptionsConfig {
  controlNamesToWatch: string[];
}
