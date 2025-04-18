import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { apiSlice } from '../query/create-api';
import appReducer, { appSlice } from './app-slice';
import userReducer, { userSlice } from './userSlice';
const isProduction = false;
const rootReducer = combineReducers({
    [appSlice.name]: appReducer,
    [userSlice.name]: userReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
});

export type ApplicationState = ReturnType<typeof rootReducer>;
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: !isProduction,
});
