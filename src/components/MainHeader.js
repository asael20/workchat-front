import PageNavigation from './PageNavigation';
import SigininButton from './SigninButton';

import '../styles/main.css'



function MainHeader() {
    
       
    return <> 
        <header className="wchat-header">
           <div className="flex-row">
                <a href="/#" className="logo" >Workchat</a>

                <PageNavigation />
                                               
                <SigininButton />
                <button className="btn ">Sign out</button>
           </div>
        </header>    
    </>
}

export default MainHeader;