export default interface RespostaModel {
  valor: string;
  certa: string;
  revelada: boolean;
}
function respondida(){
    
}
export function questaoFunction({
  valor,
  certa,
  revelada = false,
}: RespostaModel) {
  return {
    valor,
    certa,
    revelada,
  };
}
