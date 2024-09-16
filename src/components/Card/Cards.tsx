import React from "react";

interface Library {
    name: string;
    author: string;
    description: string;
}

interface CardProps {
    library: Library;
}

const Card: React.FC<CardProps> = ({library}) => {
    return (
     <div className="card">
        <div className="card-header">
            <span className="avatar">A</span>
            <span className="lib-name">{library.name}</span>
            <span className="author">{library.author}</span>
        </div>
        <div className="card-body">
            <p className="lib-description">{library.description}</p>
            <button className="expand-button">Expand</button>
        </div>
     </div>
    );
};

export default Card;