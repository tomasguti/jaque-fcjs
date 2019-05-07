import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatToolbarModule,
  MatInputModule,
  MatFormFieldModule,
  MatChipsModule,
  MatProgressSpinnerModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSidenavModule,
  MatBadgeModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatBadgeModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatBadgeModule
  ],
  declarations: []
})
export class MaterialModule { }
