import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { DataBidingComponent } from './data-biding/data-biding.component';
import { FormsModule } from '@angular/forms';
import { DiretivasComponent } from './diretivas/diretivas.component';

@NgModule({
  declarations: [AppComponent, TitleComponent, DataBidingComponent, DiretivasComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
