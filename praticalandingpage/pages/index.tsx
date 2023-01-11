import Autores from "../components/Autores";
import Bestseller from "../components/Bestseller";
import Categorias from "../components/Categorias";
import Header from "../components/Header";
import Intro from "../components/Intro";
import LivrosDetetives from "../components/LivrosDetetives";

export default function Home() {
  return (
    <>
      <Header />
      <Intro />
      <Categorias />
      <Bestseller />
      <Autores />
      <LivrosDetetives />
    </>
  );
}
