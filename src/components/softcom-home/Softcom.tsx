import SectionMarcas from "./SectionMarcas";
import Header from "./Header";
import Carousel from "./Carousel";
import Apresentacao from "./Apresentacao";
import Benefits from "./Benefits";
import Services from "./Services";
import Faq from "./Faq";
import Footer from "./Footer";


export default function Home() {

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <Carousel />

      <SectionMarcas />
      
      <Apresentacao />

      <Benefits />

      <Services />

      <Faq />

      <Footer />

    </div>
  );
}
