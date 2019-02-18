import { NgModule } from '@angular/core';

import { MaterialModule } from '../material.module';
import { TeamsComponent } from './teams.component';

@NgModule({
  declarations: [TeamsComponent],
  imports: [MaterialModule],
  exports: [TeamsComponent]
})
export class TeamsModule {}
