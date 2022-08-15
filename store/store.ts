import reducers from './reducers';

import {combineReducers, configureStore, Reducer} from '@reduxjs/toolkit';
import {createWrapper, HYDRATE, MakeStore} from "next-redux-wrapper";

const appReducer = combineReducers({
    ...reducers,
});

const reducer: Reducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state,
            ...action.payload
        }
        if (state.count) nextState.count = state.count
        return nextState
    }
    if (action.type === 'auth/logout') {
        state = undefined;
    }
    return appReducer(state, action);
};

export const makeStore = () => configureStore({
    reducer,
});


export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<typeof appReducer>;
export type AppDispatch = AppStore['dispatch'];

export const wrapper = createWrapper<AppStore>(makeStore);
