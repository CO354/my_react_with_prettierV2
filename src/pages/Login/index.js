import React from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '../../styles/GlobalStyle';
import { Tit, Paragrafo } from './styled';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    dispatch({
      type: 'BOTAO_CLICADO',

    });
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
