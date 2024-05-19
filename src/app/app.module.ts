import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {MatExpansionModule} from '@angular/material/expansion';

import { AppComponent } from './app.component';
import { InPlayComponent } from './in-play/in-play.component';
import { TodayComponent } from './today/today.component';
import { TomorrowComponent } from './tomorrow/tomorrow.component';
import { HeaderComponent } from './header/header.component';
import { HttpHandlerService } from './shared/services/http-handler.service';

@NgModule({
  declarations: [
    AppComponent,
    InPlayComponent,
    TodayComponent,
    TomorrowComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    CdkAccordionModule,
    HttpClientModule
  ],
  providers: [
    HttpHandlerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
