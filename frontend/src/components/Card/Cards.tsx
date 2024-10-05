import React from "react";

interface Library {
    name: string;
    author: string;
    action: string;
    description: string;
    url: string; // Ensure the url property is part of the Library interface
}

interface CardProps {
    library: Library;
}

const Card: React.FC<CardProps> = ({ library }) => {

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
                <span className="avatar">A</span>
                <div className="lib-info">
                    <span className="lib-name">{library.name}</span>
                    <span className="author">{library.author}</span>
                </div>
                <span className="favorite-icon">★</span>
            </div>
            <div className="card-body">
                <div className="icon-section">
                    {/* Placeholder for the icons you want to display */}
                    <div className="icon-square"></div>
                    <div className="icon-circle"></div>
                    <div className="icon-triangle"></div>
                </div>
                <div className="lib-description">
                    <h3>This is {library.name}</h3>
                    <p>{library.action}</p>
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