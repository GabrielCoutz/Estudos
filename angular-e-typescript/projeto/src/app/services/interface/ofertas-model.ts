export interface OfertasModel {
	id: number;
	categoria: string;
	titulo: string;
	descricao_oferta: string;
	anunciante: string;
	valor: number;
	destaque: true;
	imagens: {
		url: string;
	}[];
}
