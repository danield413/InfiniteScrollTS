import React from 'react'
import { useReducer } from 'react';
import { useContext } from 'react';
import reducer from './reducer';

const initialValue = {
    gifs: [],
    offset: 0,
    loading: false,
    query: ''
}

type State = {
    state: any,
    dispatch: React.Dispatch<any>
}
//Partial<ContextProps>
const GifsContext = React.createContext<State>({ state: {}, dispatch : () => {}});

export const useGifs = () => {
    return useContext(GifsContext);
}

const ContextProvider = ({children}: JSX.ElementChildrenAttribute) : JSX.Element => {

    const [state, dispatch] = useReducer(reducer, initialValue)
    
    return (
        <GifsContext.Provider value={ {state, dispatch} }>
            {children}
        </GifsContext.Provider>
    )
}

export default ContextProvider;
