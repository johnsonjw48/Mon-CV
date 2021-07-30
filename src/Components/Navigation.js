import React from 'react';
import { NavLink } from 'react-router-dom';
const Navigation = () => {
    return (
        <div className="sidebar">

            <div className="id">

                <div className="idContent">

                    <img src="./media/A_2.jpg"  height="150px" width="150px" alt="profil-pic" />
                    <h3>James Warren JOHNSON</h3>

                </div>

            </div>

            <div className="navigation">

                <ul>

                    <li>

                        <NavLink exact to="/" activeClassName="navActive">

                            <i className="fas fa-home"></i>
                            <span>Acceuil</span>

                        </NavLink>

                    </li>

                     <li>

                        <NavLink exact to="/Compétences" activeClassName="navActive">

                            <i className="fas fa-mountain"></i>
                            <span>Compétences</span>

                        </NavLink>

                    </li>

                     <li>

                        <NavLink exact to="/Portfolio" activeClassName="navActive">

                            <i className="fas fa-images"></i>
                            <span>Portfolio</span>

                        </NavLink>

                    </li>

                     <li>

                        <NavLink exact to="/Contact" activeClassName="navActive">

                            <i className="fas fa-address-book"></i>
                            <span>Contact</span>

                        </NavLink>

                    </li>




                    

                </ul>

            </div>

            <div className="socialNetwork">

                <ul>

                    <li>
                        <a href="https://www.google.fr/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </li>

                    <li>
                        <a href="https://www.google.fr/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                    </li>

                    <li>
                        <a href="https://www.google.fr/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </li>

                    <li>
                        <a href="https://www.google.fr/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook"></i>
                        </a>
                    </li>

                </ul>

            </div>

            <div className="signature">
                <p>James Warren JOHNSON © 2021</p>
            </div>

        </div>
    );
};

export default Navigation;