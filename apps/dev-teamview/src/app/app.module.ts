import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamsModule } from './teams/teams.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    AppRoutingModule,
    TeamsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
