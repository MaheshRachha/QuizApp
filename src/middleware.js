
import { } from './constants/actionTypes';
import {} from './reducers/ActionTypes';

const promiseMiddleware = store => next => action => {
    // Do Nothing for now.//
    next(action);
};

export { promiseMiddleware }