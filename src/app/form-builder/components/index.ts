import { Type } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { InputTextComponent } from './input-text/input-text.component';
import { FormItemComponent } from '@form-builder/components/form-item/form-item.component';
import { DynamicFormComponent } from '@form-builder/components/dynamic-form/dynamic-form.component';

export const COMPONENTS: Type<any>[] = [
  ButtonComponent,
  InputNumberComponent,
  InputTextComponent,
  FormItemComponent,
  DynamicFormComponent
];
