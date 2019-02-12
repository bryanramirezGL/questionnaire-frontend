import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { COMPONENTS } from './components';
import { DIRECTIVES } from './directives';
import { PIPES } from './pipes';

import {
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatIconModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatCheckboxModule,  
  MatListModule
} from '@angular/material';

const MaterialsModules = [
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatIconModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatListModule
];

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, ReactiveFormsModule, ...MaterialsModules],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    ...MaterialsModules,
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
  declarations: [...COMPONENTS, ...DIRECTIVES, ...PIPES],
})
export class SharedModule {}
