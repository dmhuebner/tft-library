import { FormGroup, ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';

import { FormGroupListConfig } from '../form-group-list/form-group-list.config';
import { ErrorDictionary } from '../../validation-handling/public_api';
import { ComputeFieldConfig, CheckControlConfig, CheckControlsConfig } from '../dynamic-form.helpers';
import { SelectFieldConfig, InputFieldConfig, CheckboxFieldConfig, AutocompleteFieldConfig, TextareaFieldConfig } from '../models';
import { RadioFieldConfig } from './radio-field-config';

interface DynamicFieldConfig {
  controlName: string;
  controlType: ControlType;
  label?: string;
  placeholder?: string;
  classes?: string[];
  flexLayoutConfig?: any;
  computeField?: ( group: FormGroup, config: any) => Observable<any>;
  computeFieldConfig?: ComputeFieldConfig | any;
  // function that returns an observable that resolves to a boolean
  showField?: (group: FormGroup, config?: any ) => Observable<boolean>;
  showFieldConfig?: CheckControlConfig | CheckControlsConfig | any; // any is required for user defined configs
  validators?: ValidatorFn[];
  value?: string | number;
}

interface FormConfig {
  controlType?: ControlType;
  controlName: string;
  label?: string;
  errorDictionary?: ErrorDictionary;
  fields: AnyFieldConfig[];
}

type AnyFieldConfig = DynamicFieldConfig
  | SelectFieldConfig
  | InputFieldConfig
  | FormGroupListConfig
  | FormConfig
  | AutocompleteFieldConfig
  | TextareaFieldConfig
  | CheckboxFieldConfig
  | RadioFieldConfig;

interface Attr {
  name: string;
  value: string;
}

enum ControlType {
  AUTOCOMPLETE = 'autocomplete',
  INPUT = 'input',
  TEXTAREA = 'textarea',
  CHECKBOX = 'checkbox',
  SELECT = 'select',
  BUTTON = 'button',
  GROUP = 'group',
  GROUP_LIST = 'groupList',
  RADIO = 'radio'
}

export {ControlType, AnyFieldConfig, DynamicFieldConfig, FormGroupListConfig, FormConfig};
