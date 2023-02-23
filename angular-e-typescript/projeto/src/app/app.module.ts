import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TopoComponent } from './shared/topo/topo.component';
import { PainelComponent } from './shared/painel/painel.component';
import { TentativasComponent } from './shared/tentativas/tentativas.component';
import { ProgressoComponent } from './shared/progresso/progresso.component';

@NgModule({
	declarations: [
		AppComponent,
		TopoComponent,
		PainelComponent,
		TentativasComponent,
		ProgressoComponent,
	],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
