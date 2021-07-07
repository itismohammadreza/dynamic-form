import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicFormConfig } from '@form-builder/models/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() {
  }

  showDialog: boolean = false;
  form = new FormGroup({});
  config: DynamicFormConfig;
  result: any;

  ngOnInit() {
  }

  onSubmitDialog(formValue) {
    this.config = formValue;
    this.showDialog = false;
  }

  onAddClick() {
    this.showDialog = true;
  }

  showFormResult() {
    this.result = this.form.value;
  }
}
