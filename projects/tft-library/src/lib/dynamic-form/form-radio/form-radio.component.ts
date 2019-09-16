import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { RadioFieldConfig, RadioOption } from './radio-field-config';
import { observablifyOptions } from '../dynamic-form.helpers';

@Component({
  selector: 'tft-form-radio',
  templateUrl: './form-radio.component.html',
  styleUrls: ['./form-radio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormRadioComponent implements OnInit {

  config: RadioFieldConfig;
  group: FormGroup;
  block: boolean;
  options$: Observable<RadioOption[]>;

  constructor( ) { }

  ngOnInit() {
    // If options are passed in as a function that returns a promise then account for that
    this.options$ = observablifyOptions(this.config, this.group);
    this.block = this.config.block || false;
  }
}

