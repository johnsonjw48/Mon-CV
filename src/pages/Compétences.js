import React from 'react';
import AutresCompetences from '../Components/Compétences/AutresCompetences';
import Experiences from '../Components/Compétences/Experiences';
import Hobbies from '../Components/Compétences/Hobbies';
import Languages from '../Components/Compétences/Languages';
import Navigation from '../Components/Navigation';

const Compétences = () => {
    return (
        <div className="Knowledges">
           <Navigation/>
           <div className="knowledgesContent">
               <Languages/>
               <Experiences/>
               <AutresCompetences/>
               <Hobbies/>
           </div>
        </div>
    );
};

export default Compétences;