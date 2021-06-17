import {HashRouter, Switch, Route} from  'react-router-dom';

import AboutPage from '../components/About';
import ServicesPage from '../components/ServicesPage';
import BlogPage from '../components/BlogPage';

function PageRoutes() {

    return (
        <HashRouter>
          <Switch>
            <Route path="/About" component= {AboutPage} />    
            <Route path="/Services" component={ServicesPage} />
            <Route path="/Blog" component={BlogPage} />
          </Switch>
        </HashRouter>
    );
}


export default PageRoutes;