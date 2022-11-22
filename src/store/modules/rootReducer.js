// A FUNCAO DE ROOTREDUCER é COMBINAR COM VARIOS REDUCERS
// rootReducer é aqui que serao passados os recuers que criamos
import { combineReducers } from 'redux';
import exampleReducer from './example/reducer';

export default combineReducers({
  example: exampleReducer,
});
