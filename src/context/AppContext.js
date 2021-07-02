import React, { useState } from 'react';

const InitialAppContext = {
    userToken: null,
    user: {},
    openModal: false
}

export const AppContext = React.createContext(InitialAppContext);



export function AppProvider({children}) {

    let [appContext, setAppContext] = useState(InitialAppContext);

    
   return <>
        <AppContext.Provider value={{appContext, setAppContext}}>
            {children}
        </AppContext.Provider>
    </>
}
