import {createStore,applyMiddleware} from "redux"
import authReducer from "./reducers/authReducer"
import {AsyncStorage} from "react-native";
import  thunk  from "redux-thunk";
import { persistStore,persistReducer } from "redux -persist";

const persistConfig = {
    key:"root",
    storage:AsyncStorage
}

const persistedReducer = persistedReducer (persistConfig,authReducer)

let store = createStore(persistedReducer,applyMiddleware(thunk))

let persistor = persistStore(store)

export {store,persistor};