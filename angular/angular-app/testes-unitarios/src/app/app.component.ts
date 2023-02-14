import { Component, DEFAULT_CURRENCY_CODE, LOCALE_ID } from '@angular/core';

import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(ptBr);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt',
    },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
  ],
})
export class AppComponent {
  title = 'testes-unitarios';
}
