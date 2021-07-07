import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { RippleModule } from 'primeng/ripple';
import { DropdownModule } from 'primeng/dropdown';
import { Type } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';

export const MODULES: Type<any>[] = [
  ButtonModule,
  DialogModule,
  InputTextModule,
  InputNumberModule,
  DropdownModule,
  CheckboxModule,
  RippleModule
];
