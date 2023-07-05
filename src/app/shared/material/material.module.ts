import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatChipsModule} from "@angular/material/chips";
import {MatDividerModule} from "@angular/material/divider";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatSelectModule} from "@angular/material/select";
import {MatCardModule} from "@angular/material/card";
import {MatOptionModule} from "@angular/material/core";
import {MatButtonToggleModule} from "@angular/material/button-toggle";


@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatChipsModule,
    MatTooltipModule,
    MatSelectModule,
    MatFormFieldModule,
    CommonModule,
    MatButtonToggleModule,
    MatOptionModule
  ],
  exports: [
    MatButtonModule,
    MatDividerModule,
    MatButtonToggleModule,
    MatCardModule,
    MatChipsModule,
    MatTooltipModule,
    MatSelectModule,
    MatFormFieldModule,
    CommonModule,
    MatOptionModule
  ]
})
export class MaterialModule {
}
