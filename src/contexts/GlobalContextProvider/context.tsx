import { createContext } from 'react';
import { initialState } from './initialState';

export const globalContext = createContext({
    ...initialState
})

export const Provider = globalContext.Provider