import { useContext } from 'react';
import {AppContext} from '../context/AppContext';

function SigininButton() {

    let {appContext, setAppContext} = useContext(AppContext);
    
    function changeOpenModal() {
        
        let ctx = {...appContext}
        ctx.openModal = false;
        setAppContext(ctx);
    }

    return <> 
       {appContext.openModal && <button className="btn" onClick={changeOpenModal} >Sign in</button>}        
    </>
}


export default SigininButton;