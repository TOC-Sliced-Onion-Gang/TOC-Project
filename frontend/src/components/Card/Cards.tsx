<<<<<<< HEAD
import React from "react";

interface Library {
    name: string;
    author: string;
    action: string;
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
                <button className="expand-button">Expand</button>
            </div>
        </div>
    );
};

=======
<<<<<<< HEAD
import React from "react";

interface Library {
    name: string;
    author: string;
    libname: string;
    action: string;
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
                    <h3>{library.libname}</h3>
                    <p>{library.action}</p>
                    <p>{library.description}</p>
                </div>
                <button className="expand-button">Expand</button>
            </div>
        </div>
    );
};

=======
import React from "react";

interface Library {
    name: string;
    author: string;
    libname: string;
    action: string;
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
                    <h3>{library.libname}</h3>
                    <p>{library.action}</p>
                    <p>{library.description}</p>
                </div>
                <button className="expand-button">Expand</button>
            </div>
        </div>
    );
};

>>>>>>> origin/ink
>>>>>>> d9d9ec00f3ea6148c3092d1e2ea85570452e394e
export default Card;