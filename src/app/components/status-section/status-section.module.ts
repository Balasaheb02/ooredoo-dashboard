import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusSectionComponent } from './status-section.component';



@NgModule({
  declarations: [StatusSectionComponent],
  imports: [
    CommonModule
  ],
  exports: [
    StatusSectionComponent
  ]
})
export class StatusSectionModule { }
