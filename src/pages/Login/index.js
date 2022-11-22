import React from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '../../styles/GlobalStyle';
import { Tit, Paragrafo } from './styled';
import * as exampleActions from '../../store/modules/example/actions';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    dispatch(exampleActions.clicaBotaoRequest());
  }

  return (
    <Container>
      <Tit>
        Login
        <small>Oie</small>
      </Tit>
      <Paragrafo>Lorem ipsum dolor site amet</Paragrafo>
      <button type="button" onClick={handleClick}>Login</button>
    </Container>
  );
}
