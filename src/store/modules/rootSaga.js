// TODAS AS MINHA SAGAS ESTARAO AQUI;

import { all } from 'redux-saga/effects';

import example from './example/sagas';

export default function* rootSaga() {
  return yield all([example]);
}
