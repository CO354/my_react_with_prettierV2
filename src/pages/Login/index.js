import React from 'react';
import { Container } from '../../styles/GlobalStyle';
import { Tit, Paragrafo } from './styled';

export default function Login() {
  return (
    <Container>
      <Tit>
        Login
        <small>Oie</small>
      </Tit>
      <Paragrafo>Lorem ipsum dolor site amet</Paragrafo>
      <button type="button">Login</button>
    </Container>
  );
}
