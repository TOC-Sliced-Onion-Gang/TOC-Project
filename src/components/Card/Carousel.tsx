import React, { useState } from "react";
import Card from "./Cards.tsx";
import '../CSS/CarouselStyles.css';
interface Library {
    name: string;
    author: string;
    description: string;
}

interface CarouselProps {
    libraries: Library[];
}

const Carousel: React.FC<CarouselProps> = ({ libraries }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const nextSlide = (): void => {
      setCurrentIndex((prevIndex) => (prevIndex < libraries.length - 1 ? prevIndex + 1 : 0));
    };

    const prevSlide = (): void => {
      setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : libraries.length - 1))
    };

    const handleScroll = (e: React.WheelEvent<HTMLDivElement>): void => {
        if (e.deltaY > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
};

return (
    <div className="carousel-container" onWheel={handleScroll}>
      <button className="prev" onClick={prevSlide}>←</button>
      <div className="carousel">
        <Card library={libraries[currentIndex]} />
      </div>
      <button className="next" onClick={nextSlide}>→</button>
    </div>
  );
};

export default Carousel;