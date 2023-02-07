import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { DataBidingComponent } from './data-biding/data-biding.component';
import { FormsModule } from '@angular/forms';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { AtributosComponent } from './atributos/atributos.component';

import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    DataBidingComponent,
    DiretivasComponent,
    AtributosComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
