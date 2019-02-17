import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsComponent } from './teams.component';

@NgModule({
  declarations: [TeamsComponent],
  imports: [
    CommonModule
  ],
  exports: [TeamsComponent]
})
export class TeamsModule { }
