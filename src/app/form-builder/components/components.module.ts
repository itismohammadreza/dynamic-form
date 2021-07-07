import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { COMPONENTS } from '.';
import { PrimeNgModule } from '../prime-modules/prime-ng.module';

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS, PrimeNgModule],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeNgModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {
}
