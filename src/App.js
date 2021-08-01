import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Acceuil from './pages/Acceuil';
import Compétences from './pages/Compétences';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import inexistant from './pages/Inexistant';
import reactDom from 'react-dom';

const App = () => {
    return (
        <div>
           <BrowserRouter>
                <Switch>

                    <Route path="/" exact component={Acceuil}  />
                    <Route path="/Compétences" component={Compétences}  />
                    <Route path="/Portfolio" component={Portfolio}  />
                    <Route path="/Contact" component={Contact}  />
                    <Route  component={inexistant}  />

                </Switch>
           
           </BrowserRouter>
        </div>
    );
};

export default App;