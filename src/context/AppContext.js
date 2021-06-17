import React from 'react';

const InitialAppContext = {
    userToken: null,
    user: {}
}

export const AppContext = React.createContext(InitialAppContext);



export function AppProvider({children}) {

    
    
   return <>
        <AppContext.Provider value={InitialAppContext}>
            {children}
        </AppContext.Provider>
    </>
}
