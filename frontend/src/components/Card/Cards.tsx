import React, { useEffect, useState } from "react";

interface Library {
    name: string;
    author: string;
    action: string;
    description: string;
    url: string; // Ensure the url property is part of the Library interface
}

interface CardProps {
    library: Library;
    image: string;
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

const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * randomImages.length);
    return randomImages[randomIndex];
};

const Card: React.FC<CardProps> = ({ library, image }) => {

    const handleExpandClick = () => {
        if (library.url) {
            window.location.href = library.url; // Redirect to the provided URL
        } else {
            console.log("No URL provided"); // In case there's no URL, handle it accordingly
        }
    };

    return (
    <div className="card">
        <div className="card-header">
            <span className="avatar">{library.name[0]}</span>
            <div className="lib-info">
                <span className="lib-name">{library.name}</span>
                <span className="author">{library.author ? (library.author === "-" ? "undefined" : library.author) : "No specified author"}</span>
            </div>
            <span className="favorite-icon">★</span>
        </div>
        <div className="card-body">
                <div className="icon-section">
                    {/* <img className="icon-image-keyword" src={getRandomImage()} alt="Random library icon" /> */}
                    <img className="icon-image-keyword" src={image} alt="Random library icon" />
                </div>
                <div className="lib-description">
                    <h3>{library.name}</h3>
                    <div className="lib-action">
                    <p>{library.action || 'No action available'}</p>
                    </div>
                    <p>{library.description}</p>
                </div>
                <button 
                    className="expand-button"
                    onClick={handleExpandClick} // Handle the click event
                >
                    Source
                </button>
                {/* <span className="e">{library.url}</span> */}
            </div>
        </div>
    );
};

export default Card;