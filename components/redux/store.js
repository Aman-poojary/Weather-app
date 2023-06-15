import { configureStore } from "@reduxjs/toolkit";
import rootrReducer from "./rootrReducer";
import createSagaMiddleware from 'redux-saga';
import SagaData from "./saga";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer:rootrReducer,
    middleware:()=>[sagaMiddleware]
});

sagaMiddleware.run(SagaData);
export default store;