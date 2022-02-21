import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  background-color: var(--green-200);
  height: 100vh;
  min-height: 760px;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 580px) {
    transition: 0.4s;
    padding: 1rem 15px;
  }
`;

export const Form = styled.form`
  max-width: 500px;
  width: 100%;
  height: 650px;
  padding: 1rem;
  margin: 0 auto;
  background-color: var(--white);
  border-radius: 0.3rem;
  transition: 0.4s;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  color: var(--blue-700);
`;

export const ContainerContent = styled.div``;

export const Label = styled.label`
  display: block;
  color: var(--grey-500);
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  padding: 0.6rem;
  width: 100%;
  border-radius: 0.3rem;
`;

export const ContainerGrid = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
`;

export const ContainerAddress = styled.div`
`;

export const ContainerFlex = styled.div`
  display: flex;
  margin-top: 2rem;
  justify-content: center;
  gap: 1rem;
`;

export const Button = styled.button`
  padding: 1rem;
  border-radius: 0.3rem;
  border: none;
  color: var(--white);
  background: var(--green-200);
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const Div = styled.div`
  margin-top: 3rem;
  text-align: center;
`;
export const Anchor = styled.a`
  padding: 1rem;
  border-radius: 0.3rem;
  border: none;
  color: var(--green-200);
  background: var(--white);
  transition: 0.3s;
  margin: 0 auto;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`;