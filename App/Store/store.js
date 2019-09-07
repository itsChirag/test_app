/* Main redux store and configuration */
import { createStore, applyMiddleware } from 'redux';
/* Logger for redux */
import logger from 'redux-logger';

// import reducers that we have created 
import reducers from './reducers'; 


let Store = null;

export function saveStore(createStore){
    Store = createStore;
}
export function getStore(){
    if (!Store) {
        const middleware = [];
        if (!__DEV__) {
            middleware.push(logger);
        }
        Store = createStore(reducers, applyMiddleware(...middleware));
    }
    return Store;
}