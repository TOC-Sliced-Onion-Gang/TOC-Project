import React, { useState } from "react";
import Card from "./Cards.tsx";
import '../CSS/CarouselStyles.css';
interface Library {
    name: string;
    author: string;
    libname: string;
    action: string;
    description: string;
}

interface CarouselProps {
    libraries: Library[];
}

const Carousel: React.FC<CarouselProps> = ({ libraries }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const visibleCount = 3; // Show 3 cards at a time

    const nextSlide = (): void => {
        // Move forward by 1 card or loop back to the beginning
        setCurrentIndex((prevIndex) => (prevIndex + 1) % libraries.length);
    };

    const prevSlide = (): void => {
        // Move back by 1 card or loop to the last set
        setCurrentIndex((prevIndex) => 
            (prevIndex - 1 + libraries.length) % libraries.length
        );
    };

    const handleScroll = (e: React.WheelEvent<HTMLDivElement>): void => {
        if (e.deltaY > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
};
    // Get the visible cards
    const visibleLibraries = libraries.slice(currentIndex, currentIndex + visibleCount)
        .concat(libraries.slice(0, Math.max(0, currentIndex + visibleCount - libraries.length)));
        
return (
    <div className="carousel-container" onWheel={handleScroll}>
      <button className="arrow-prev arrow-left" onClick={prevSlide}>←</button>
      <div className="carousel">
        <div className="card-wrapper">
            {visibleLibraries.map((library, index) => (
                <Card key={index} library={library} />
            ))}
        </div>
      </div>
      <button className="arrow-next arrow-right" onClick={nextSlide}>→</button>
    </div>
  );
};

export default Carousel;