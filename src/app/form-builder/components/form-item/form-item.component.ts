import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'ng-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.scss']
})
export class FormItemComponent implements OnInit {

  constructor() {
  }

  @Output() onSubmit = new EventEmitter();

  form = new FormGroup({
    type: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    label: new FormControl(''),
    placeholder: new FormControl(''),
    hint: new FormControl(''),
    required: new FormControl(false)
  });
  dropDownOptions: SelectItem[] = [{label: 'Text', value: 'text'}, {label: 'Number', value: 'number'}];

  ngOnInit(): void {
  }

  submit() {
    this.onSubmit.emit(this.form.value);
    this.form.reset();
  }

}
