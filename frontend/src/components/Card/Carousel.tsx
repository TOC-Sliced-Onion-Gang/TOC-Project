import React, { useState, useEffect } from "react";
import Card from "./Cards";

import '../CSS/CarouselStyles.css';

interface Library {
    name: string;
    author: string;
    action: string;
    description: string;
    url: string;
}

interface CarouselProps {
    libraries: Library[];
}

const randomImages = [
    "../python-lib/python-lib-1.jpg",
    "../python-lib/python-lib-2.jpg",
    "../python-lib/python-lib-3.jpg",
    "../python-lib/python-lib-4.jpg",
    "../python-lib/python-lib-5.jpg",
    "../python-lib/python-lib-6.jpg",
    "../python-lib/python-lib-7.jpg",
    "../python-lib/python-lib-8.jpg",
    "../python-lib/python-lib-9.jpg",
    "../python-lib/python-lib-10.jpg",
    "../python-lib/python-lib-11.jpg",
    "../python-lib/python-lib-12.jpg",
    "../python-lib/python-lib-13.jpg",
    "../python-lib/python-lib-14.jpg",
    "../python-lib/python-lib-15.jpg",
    "../python-lib/python-lib-16.jpg",
    "../python-lib/python-lib-17.jpg",
];

const Carousel: React.FC<CarouselProps> = ({ libraries }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [assignedImages, setAssignedImages] = useState<{ [key: string]: string }>({}); // Object to store library-to-image mapping
    const visibleCount = 3; // Show 3 cards at a time
    const totalDots = Math.ceil(libraries.length / visibleCount); // Total number of dot indicators

    const transitionDuration = 0.5; // Smooth transition duration in seconds

    // Assign a random image to each library (only once)
    useEffect(() => {
        const newAssignedImages: { [key: string]: string } = {};
        const shuffledImages = [...randomImages].sort(() => Math.random() - 0.5);

        libraries.forEach((library, index) => {
            // Assign a random image only if it hasn't been assigned yet
            if (!newAssignedImages[library.name] && !assignedImages[library.name]) {
                newAssignedImages[library.name] = shuffledImages[index % shuffledImages.length];
            }
        });

        // Merge the new assigned images with any previously assigned images
        setAssignedImages((prevImages) => ({ ...prevImages, ...newAssignedImages }));
    }, [libraries]); // Only re-run if libraries change

    const nextSlide = (): void => {
        setCurrentIndex((prevIndex) => (prevIndex + visibleCount) % libraries.length);
    };

    const prevSlide = (): void => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - visibleCount + libraries.length) % libraries.length
        );
    };

    const handleDotClick = (index: number): void => {
        setCurrentIndex(index * visibleCount);
    };

    const visibleLibraries = libraries.slice(currentIndex, currentIndex + visibleCount)
        .concat(libraries.slice(0, Math.max(0, currentIndex + visibleCount - libraries.length)));

    return (
      <div className="carousel-container">
        <button className="arrow-prev arrow-left" onClick={prevSlide}>←</button>
        <button className="arrow-next arrow-right" onClick={nextSlide}>→</button>

        <div className="carousel-slide">
            <div className="carousel">
                <div className="card-wrapper">
                    {visibleLibraries.map((library, index) => (
                        <Card 
                            image={assignedImages[library.name]} // Pass the assigned image
                            key={index} 
                            library={library} 
                        />
                    ))}
                </div>
            </div>
            {/* Progress Bar */}
            <div className="progress-bar">
                <div className="progress-track"></div>
                <div className="dots-container">
                    {Array.from({ length: totalDots }).map((_, dotIndex) => (
                        <div
                            key={dotIndex}
                            className={`dot ${dotIndex === Math.floor(currentIndex / visibleCount) ? 'active' : ''}`}
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