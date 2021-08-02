import React from 'react';

const Hobbies = () => {
    return (
       <div className="hobbies">
           <h3>Centres d'intérêts</h3>
           <ul>
               <li className="hobby">
               <i class="fas fa-futbol"></i>
               <span>Football en championnat</span>
               </li>

               <li className="hobby">
               <i class="fas fa-film"></i>
               <span>Cinéma</span>
               </li>

               <li className="hobby">
               <i class="fas fa-running"></i>
               <span>Sport</span>
               </li>

               <li className="hobby">
               <i class="fas fa-book"></i>
               <span>Littérature africaine</span>
               </li>

               <li className="hobby">
               <i class="fas fa-gamepad"></i>
               <span>Jeux vidéo</span>
               </li>
           </ul>
       </div>
    );
};

export default Hobbies;