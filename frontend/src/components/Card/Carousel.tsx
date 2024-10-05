import React, { useState } from "react";
import Card from "./Cards.tsx";
import '../CSS/CarouselStyles.css';

interface Library {
    name: string;
    author: string;
    action: string;
    description: string;
}

interface CarouselProps {
    libraries: Library[];
}

const Carousel: React.FC<CarouselProps> = ({ libraries }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const visibleCount = 3; // Show 3 cards at a time
    const totalDots = Math.ceil(libraries.length / visibleCount); // Total number of dot indicators

    const transitionDuration = 0.5; // Smooth transition duration in seconds

    const nextSlide = (): void => {
        setCurrentIndex((prevIndex) => (prevIndex + visibleCount) % libraries.length);
    };

    const prevSlide = (): void => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - visibleCount + libraries.length) % libraries.length
        );
    };

    const handleDotHover = (index: number): void => {
        setCurrentIndex(index * visibleCount);
    };

    const handleDotClick = (index: number): void => {
        setCurrentIndex(index * visibleCount);
    };

    const visibleLibraries = libraries.slice(currentIndex, currentIndex + visibleCount)
        .concat(libraries.slice(0, Math.max(0, currentIndex + visibleCount - libraries.length)));

    return (
      <div className="carousel-container">
        <div className="carousel-slide">
            <div className="carousel">
                <div className="card-wrapper">
                    {visibleLibraries.map((library, index) => (
                        <Card key={index} library={library} />
                    ))}
                </div>
            </div>
            <button className="arrow-prev arrow-left" onClick={prevSlide}>←</button>
            <button className="arrow-next arrow-right" onClick={nextSlide}>→</button>

            {/* Progress Bar */}
            <div className="progress-bar">
                <div className="progress-track"></div>
                <div className="dots-container">
                    {Array.from({ length: totalDots }).map((_, dotIndex) => (
                        <div
                            key={dotIndex}
                            className={`dot ${dotIndex === Math.floor(currentIndex / visibleCount) ? 'active' : ''}`}
                            onMouseEnter={() => handleDotHover(dotIndex)} // Hovering over the dot will preview that set
                            onClick={() => handleDotClick(dotIndex)} // Clicking will navigate to that set
                        />
                    ))}
                </div>
            </div>
        </div>
      </div>
    );
};

export default Carousel;
