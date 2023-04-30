import { createContext } from 'react';
import { initialState } from './initialState';

export const GlobalContext = createContext({
    ...initialState
})

export const Provider = GlobalContext.Provider