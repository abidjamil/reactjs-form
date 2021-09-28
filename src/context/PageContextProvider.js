import React, { useState, useEffect, createContext } from 'react';
export const PageContext = createContext();
const PageContextProvider = (props) => {
    const [user, setUser] = useState({
        'email': 'abc@xyz.com',
        'passwrod': 'asdf'
    });
    return (
        <PageContext.Provider value={{
            user: user,
        }}>
            {props.children}
        </PageContext.Provider>
    );
}
export default PageContextProvider;