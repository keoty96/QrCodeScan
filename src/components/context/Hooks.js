import { useContext, useCallback } from 'react';

import { ListContext } from './Context';

export function useList() {
    const { state, dispatch } = useContext(ListContext);

    const addData = (data) => {
        dispatch({type: 'ADD', data: data })
    }

    return [state, addData];
}