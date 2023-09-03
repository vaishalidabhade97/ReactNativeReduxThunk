import { combineReducers, configureStore } from "@reduxjs/toolkit";
import contentReducer from './reducers'

const rootReducer = combineReducers({
    content: contentReducer
})
export const store = configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
