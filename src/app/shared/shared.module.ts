import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ElementsModule } from './elements/elements.module';
import { MaterialModule } from './elements/material/material.module';

const SHARED_MODULES = [
  CommonModule,
  ElementsModule,
  MaterialModule
];

@NgModule({
  declarations: [],
  imports: [SHARED_MODULES],
  exports: [SHARED_MODULES],
})
export class SharedModule {}
