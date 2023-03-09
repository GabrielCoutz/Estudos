import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiversaoComponent } from './diversao/diversao.component';
import { HomeComponent } from './home/home.component';
import { OfertaComponent } from './oferta/oferta.component';
import { OrdemCompraComponent } from './ordem-compra/ordem-compra.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
	},
	{
		path: 'restaurantes',
		component: RestaurantesComponent,
	},
	{
		path: 'diversao',
		component: DiversaoComponent,
	},
	{
		path: 'oferta/:id',
		component: OfertaComponent,
	},
	{
		path: 'ordem-compra',
		component: OrdemCompraComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
