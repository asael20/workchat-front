import '../styles/main.css'

import { 
    HashRouter,
    BrowserRouter as Router,
    Link,
    // Switch,
    // Route
} from "react-router-dom";
// import About from './About';
// import ServicesPage from './ServicesPage';
// import BlogPage from './BlogPage';

function PageNavigation (){ 
    
    return (

        <HashRouter>
            <nav className="navigation">
                <ul className="flex-row">
                    <li>
                        <Link to="/About">About us</Link>
                    </li>
                    <li>
                        <Link to="/Services" >Services</Link>
                    </li>
                    <li>
                        <Link to="/Blog" >Blog</Link>
                    </li>
                </ul>
            </nav>
        </HashRouter>    
    );
}


export default PageNavigation;