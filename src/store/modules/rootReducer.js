// A FUNCAO DE ROOTREDUCER é COMBINAR COM VARIOS REDUCERS
import { combineReducers } from 'redux';
import exampleReducer from './example/reducer';

export default combineReducers({
  example: exampleReducer,
});
