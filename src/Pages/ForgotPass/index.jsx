import React from "react";
import { LayoutLogin } from "../../Components/Layout/Login/index";

import styled from "styled-components";

export const Container = styled.div`
  @media screen and (min-width: 1027px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .content {
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      p {
        text-transform: uppercase;
        font-size: 0.8rem;
        color: #566a7f;
      }
      form {
        display: flex;
        margin-top: 1rem;
        flex-direction: column;
        height: 75%;
        gap: 2rem;
        align-items: center;
        justify-content: space-between;

        input {
          width: 25vw;
          height: auto;
          border: none;
          border-radius: 0.3rem;
        }
        button {
          width: 25vw;
          height: auto;
          border: none;
          background-color: #696cff;
          color: #ffffff;
          border-radius: 0.3rem;
        }
      }
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .content {
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      p {
        text-transform: uppercase;
        font-size: 0.8rem;
        color: #566a7f;
      }
      form {
        display: flex;
        margin-top: 1rem;
        flex-direction: column;
        height: 75%;
        gap: 2rem;
        align-items: center;
        justify-content: space-between;

        input {
          width: 25vw;
          height: auto;
          border: none;
          border-radius: 0.3rem;
        }
        button {
          width: 25vw;
          height: auto;
          border: none;
          background-color: #696cff;
          color: #ffffff;
          border-radius: 0.3rem;
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .content {
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      p {
        text-transform: uppercase;
        font-size: 0.8rem;
        color: #566a7f;
      }
      form {
        display: flex;
        margin-top: 1rem;
        flex-direction: column;
        height: 75%;
        gap: 2rem;
        align-items: center;
        justify-content: space-between;

        input {
          width: auto;
          height: auto;
          border: none;
          border-radius: 0.3rem;
        }
        button {
          width: auto;
          height: auto;
          border: none;
          background-color: #696cff;
          color: #ffffff;
          border-radius: 0.3rem;
        }
      }
    }
  }
`;

export const Forgot = () => {
  return (
    <>
      <LayoutLogin>
        <Container>
          <div className="content">
            <p>informe seu email de usuário</p>
            <form action="">
              <input type="text" placeholder="Usuário/E-mail" />
              <button>Recuperar Senha</button>
            </form>
          </div>
        </Container>
      </LayoutLogin>
    </>
  );
};
