import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(
    -45deg,
    rgba(147, 26, 222, 0.83) 0%,
    rgba(28, 206, 234, 0.82) 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh; 
  padding: 20px;
  gap: 2rem;

  p {
    font-size: 1.5rem;
    font-weight: 500;
    color: #fff;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  h2 {
    font-size: 1.1rem;
    font-weight: 500;
    padding: 10px;
    color: #000000;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 400px;

  h1, p {
    text-align: center;
  }
`

export const Titulo = styled.h1`
  color: #fff;
  font-size: 2rem;
`;

export const Button = styled.button`
  border: none;
  border-radius: 2px;
  box-shadow: 1px 1px 5px #000;
  padding: 16px 28px;
  border-radius: 8px;
  background-color: transparent;
  font-size: 1.1rem;

  background: rgba(0, 0, 0, 0.45);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: whitesmoke;
`;
