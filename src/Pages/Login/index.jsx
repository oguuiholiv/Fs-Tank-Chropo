import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { LayoutLogin } from "../../Components/Layout/Login/index";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .info {
    margin-top: 1rem;
    @media screen and (min-width: 1024px) {
      p {
        text-transform: uppercase;
        font-size: 0.8em;
        color: #566a7f;
      }
    }
    @media screen and (min-width: 768px) and (max-width: 1023px) {
      p {
        text-transform: uppercase;
        font-size: 0.8em;
        color: #566a7f;
      }
    }
    @media screen and (max-width: 767px) {
      p {
        text-transform: uppercase;
        font-size: 10px;
        color: #566a7f;
      }
    }
  }
  .LoginForm {
    .form {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.8rem;

      input {
        width: 25vw;
        height: auto;
        border-radius: 0.3rem;
        border: none;
        background-color: #fff;
      }
      p {
        position: relative;
        text-transform: uppercase;
        font-size: 0.7rem;
      }
      button {
        width: 20vw;
        height: auto;
        border-radius: 0.3rem;
        background-color: #696cff;
        color: #fff;
        border: none;
      }
    }
  }
`;

export const Login = () => {
  return (
    <>
      <LayoutLogin>
        <Container>
          <div className="info">
            <p>informe suas credenciais de acesso!</p>
          </div>
          <div className="LoginForm">
            <form action="" className="form">
              <input type="text" placeholder="E-mail" />
              <input type="text" placeholder="Password" />
              <p>
                <Link to="/Fs-Tank-Chropo/Forgot">
                  <a href="">esqueci minha senha</a>
                </Link>
              </p>
              <button type="submit">Login</button>
            </form>
          </div>
        </Container>
      </LayoutLogin>
    </>
  );
};
