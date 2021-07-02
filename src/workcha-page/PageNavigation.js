import '../styles/main.css';

import { 
    HashRouter,
    BrowserRouter as Router,
    Link
} from "react-router-dom";


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