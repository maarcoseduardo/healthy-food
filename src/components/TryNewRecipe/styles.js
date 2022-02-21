import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import IllustrationBg from "../../assets/Illustration.svg";

export const TryRecipeContent = styled.div`
  background: url(${IllustrationBg.src}) no-repeat;
  background-position: top right;
  background-size: contain;
  position: relative;
  transition: 0.4s;
  height: 40rem;

  @media (min-width: 1500px) and (max-width: 1919px) {
    height: 50rem;
  }

  @media (min-width: 1920px) {
    height: 60rem;
  }

  @media (max-width: 900px) {
    background-size: cover;
  }
`;

export const Container = styled.section`
  height: inherit;
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  height: 20rem;
  padding: 0 2rem;
  max-width: 30rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 0.5rem;

  @media (max-width: 900px) {
    background: rgba(255, 255, 255, 0.2);
    width: 90%;
    margin: 0 auto;
    backdrop-filter: blur(5px);
  }
`;

export const Div = styled.div``;

export const Title = styled.h1`
  font-size: 3rem;
  max-width: 20rem;
  color: var(--blue-700);
`;

export const DivInputButton = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  padding: 1rem;
  width: 100%;
  max-width: 25rem;
  margin-right: 1rem;
  border-radius: 0.3rem;
`;

export const Button = styled.button`
  padding: 1rem;
  border-radius: 0.3rem;
  border: none;
  color: var(--white);
  background: var(--green-200);
  transition: 0.3s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const Icon = styled(FiSearch)`
  font-size: 16px;
`;
