import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicFormConfig } from '@form-builder/models/forms';

@Component({
  selector: 'ng-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent implements OnInit {
  constructor() {
  }

  form: FormGroup;
  config: DynamicFormConfig;

  ngOnInit() {
  }
}
