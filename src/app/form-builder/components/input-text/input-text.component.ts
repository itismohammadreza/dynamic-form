import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicFormConfig } from '@form-builder/models/forms';

@Component({
  selector: 'ng-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {

  constructor() {
  }

  form: FormGroup;
  config: DynamicFormConfig;

  ngOnInit() {
  }
}
