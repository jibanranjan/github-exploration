
import {legacy_createStore} from 'redux'
import basicReducer from './Reducer';
import logger from 'redux-logger';
import { applyMiddleware } from 'redux';


const myStore =legacy_createStore(basicReducer, applyMiddleware(logger));

export default myStore;