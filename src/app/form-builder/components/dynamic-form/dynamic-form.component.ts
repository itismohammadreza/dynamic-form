import {
  Component,
  ComponentFactoryResolver,
  Input,
  OnChanges,
  SimpleChanges,
  Type,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputTextComponent } from '@form-builder/components/input-text/input-text.component';
import { DynamicFormConfig } from '@form-builder/models/forms';
import { InputNumberComponent } from '@form-builder/components/input-number/input-number.component';

@Component({
  selector: 'ng-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnChanges {

  constructor(
    private resolver: ComponentFactoryResolver) {
  }

  @Input() config: DynamicFormConfig;
  @Input() form: FormGroup;
  @ViewChild('container', {read: ViewContainerRef, static: true}) viewContainerRef: ViewContainerRef;

  inputTypes = {
    text: InputTextComponent,
    number: InputNumberComponent
  };

  ngOnChanges(changes: SimpleChanges) {
    if (changes.config.currentValue) {
      this.addForm();
    }
  }

  addForm() {
    const factory = this.resolver.resolveComponentFactory(this.inputTypes[this.config.type] as Type<any>);
    const componentRef = this.viewContainerRef.createComponent(factory);
    if (this.config.required) {
      this.form.addControl(this.config.name, new FormControl(null, [Validators.required]));
    }
    else {
      this.form.addControl(this.config.name, new FormControl());
    }
    componentRef.instance.config = this.config;
    componentRef.instance.form = this.form;
  }
}
