import React from 'react';
import Navigation from '../Components/Navigation';

const Acceuil = () => {
    return (
        <div className="home">
            <Navigation/>
            <div className="homeContent">
                <div className="Content">
                    <h1>James JOHNSON</h1>
                    <h2>Developpeur full-Stack</h2>
                     <div className="pdf">
                         <a href="./media/CV.pdf" target="_blank">Télécharger mon CV</a>
                     </div>
                </div>
            </div>
        </div>
    );
};

export default Acceuil;