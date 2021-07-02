import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

import PageNavigation from '../workcha-page/PageNavigation';
import SigininButton  from '../workcha-page/SigninButton';

import '../styles/main.css';



function MainHeader() {
    
    let {appContext, setAppContext} = useContext(AppContext);
    
    function changeOpenModal() {
        let ctx = {...appContext}
        ctx.openModal = true;
        setAppContext(ctx);
    }
    
    return <> 
        <header className="wchat-header">
           <div className="flex-row">
                <SigininButton />
                <button className="btn " onClick={changeOpenModal}>Sign up</button>
                <PageNavigation />
                <a href="/#" className="logo" >Workchat</a>
           </div>
        </header>    
    </>
}

export default MainHeader;