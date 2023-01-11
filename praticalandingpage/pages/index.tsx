import Autores from "../components/Autores";
import Bestseller from "../components/Bestseller";
import Categorias from "../components/Categorias";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Intro from "../components/Intro";
import LivrosDetetives from "../components/LivrosDetetives";
import RelevantNumbers from "../components/RelevantNumbers";

export default function Home() {
  return (
    <>
      <Header />
      <Intro />
      <Categorias />
      <Bestseller />
      <Autores />
      <LivrosDetetives />
      <RelevantNumbers />
      <Footer />
    </>
  );
}
