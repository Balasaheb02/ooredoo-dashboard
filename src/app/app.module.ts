import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import {TopBarModule} from 'src/app/components/top-bar/top-bar.module';
import {TableModule} from 'src/app/components/table/table.module';
import {MapModule} from 'src/app/components/map/map.module';
import {StatusSectionModule} from 'src/app/components/status-section/status-section.module'


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TopBarModule,
    TableModule,
    MapModule,
    StatusSectionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
