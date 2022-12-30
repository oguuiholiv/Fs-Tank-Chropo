import React from 'react';

import styled from 'styled-components';
import {LayoutLogin} from '../../Components/Layout/Login/index'


export const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;

.info{
  margin-top: 1rem;
  p{
    text-transform: uppercase;
    font-size:0.8rem;
    color: #566A7F;
  }
}
.LoginForm{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  input{
    width:25vw;
    height:4vh;
    border-radius:0.3rem;
    border: none;
    background-color: #fff;
  }
  p{
    position: relative;
    text-transform: uppercase;
    font-size: 0.7rem;
  }
  button{
    width:20vw;
    height:4vh;
    border-radius:0.3rem;
    background-color: #696cff;
    color: #fff;
    border: none;
  }
}
  
`;

export const Login = () => {
  return (
    <>
      <LayoutLogin>
        <Container>
          <div className="info"><p>informe suas credenciais de acesso!</p></div>
          <div className="LoginForm">
            <input type="text" placeholder="E-mail" />
            <input type="text" placeholder="Password"/>
            <p><a href="">esqueci minha senha</a></p>
            <button type="submit">Login</button>
          </div>
        </Container>
      </LayoutLogin>
    </>
  )
}
