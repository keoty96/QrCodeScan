import React, { createContext, useReducer } from 'react';

export const initialState = {
    data: []
};

export const ListContext = createContext({
    state: initialState,
    dispatch: () => null,
});

const Provider = ListContext.Provider;


function reducer(state = initialState, action) {

    switch (action.type) {
        case 'ADD':
            return { ...state, data: [...state.data, action.data] };
        default:
            return prevState;
    }
}

export const ListStore = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (<Provider value={{ state, dispatch }}>{children}</Provider>);
}