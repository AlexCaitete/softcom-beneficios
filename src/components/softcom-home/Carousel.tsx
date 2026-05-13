import { useState } from "react";
import { ChevronLeft, ChevronRight} from "lucide-react";
  
export default function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
      { id: 1, alt: "O software da sua loja está aqui", image: "/src/assets/carousel-1.png" },
      { id: 2, alt: "Mobilidade e Agilidade", image: "/src/assets/carousel-2.png" },
      { id: 3, alt: "A melhor jornada a receber", image: "/src/assets/carousel-3.png" },
    ];

    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (

        <section className="relative bg-white h-[500px]">
                <div className="relative h-full flex items-center justify-center">
                  <img
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].alt}
                    className="w-full h-full object-contain"
                  />
                </div>
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </section>
    )
}