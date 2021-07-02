import {HashRouter, Switch, Route} from  'react-router-dom';

import AboutPage    from '../workcha-page/About';
import BlogPage     from '../workcha-page/BlogPage';
import ServicesPage from '../workcha-page/ServicesPage';

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