import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsModule } from './elements/elements.module';
const SHARED_MODULES = [
  CommonModule,
  ElementsModule,
];

@NgModule({
  declarations: [],
  imports: [SHARED_MODULES],
  exports: [SHARED_MODULES],
})
export class SharedModule {}
