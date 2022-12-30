import React from "react";
import styled from "styled-components";
import Splash from "../../../assets/images/splash.png";
import Logo from "../../../assets/images/logo.png";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .content {
    width: 75%;
    height: 75%;
    background-color: #f2f2f2;
    display: flex;
    flex-direction: row;
    border-radius: 1.4rem;

    .splash {
      @media screen and (min-width: 1024px) {
        width: 50%;
        height: 100%;
        background: url(${Splash});
        background-size: cover;
        border-top-left-radius: inherit;
        border-bottom-left-radius: inherit;
      }
      @media screen and (min-width: 768px) and (max-width: 1023px) {
        width: 50%;
        height: 100%;
        background: url(${Splash});
        background-size: cover;
        border-top-left-radius: inherit;
        border-bottom-left-radius: inherit;
      }
      @media screen and (max-width: 767px) {
        opacity: 0;
      }
    }

    .content-logo {
      @media screen and (min-width: 1024px) {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;

        .image {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 12vh;

          img {
            width: 50%;
          }
        }
      }
      @media screen and (min-width: 768px) and (max-width: 1023px) {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;

        .image {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 12vh;

          img {
            width: 50%;
          }
        }
      }
      @media screen and (max-width: 767px) {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;

        .image {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 12vh;

          img {
            width: 50%;
          }
        }
      }
    }
  }
`;

export const LayoutLogin = ({children}) => {
  return (
    <>
      <Container>
        <div className="content">
          <div className="splash"></div>
          <div className="content-logo">
            <div className="image">
              <img src={Logo} alt="logo" />
            </div>
            {children}
          </div>
        </div>
      </Container>
    </>
  );
};

