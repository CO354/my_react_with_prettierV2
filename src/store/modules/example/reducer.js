import * as types from '../types';

const initialState = {
  botaoClicado: false,
};
// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCCESS: {
      // eslint-disable-next-line
      console.log('Deu sucesso');
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }

    case types.BOTAO_CLICADO_FAILURE: {
      // eslint-disable-next-line
      console.log('Houve uma falha =(');
      return state;
    }

    case types.BOTAO_CLICADO_REQUEST: {
      // eslint-disable-next-line
      console.log('Fazendo a requisicao');
      return state;
    }

    default: {
      return state;
    }
  }
}
