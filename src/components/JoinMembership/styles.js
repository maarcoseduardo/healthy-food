import styled from "styled-components";
import BgMembership from "../../assets/bloco_final_image.svg";

export const Container = styled.section`
  height: inherit;
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  padding: 2rem;

  @media (max-width: 900px) {
    background: rgba(255, 255, 255, 0.2);
    width: 90%;
    margin: 0 auto;
    backdrop-filter: blur(5px);
    border-radius: 0.5rem;
  }
`;

export const Membership = styled.div`
  background: url(${BgMembership.src}) no-repeat;
  background-position: top right;
  background-size: contain;
  height: 45rem;
  position: relative;

  @media (max-width: 600px) {
    background-size: cover;
  }
`;

export const Title = styled.h1`
  color: var(--blue-400);
  max-width: 22rem;
`;

export const Div = styled.div`
  display: flex;
  margin-top: 2rem;
`;

export const Input = styled.input`
  padding: 1rem;
  width: 100%;
  max-width: 20rem;
  margin-right: 1rem;
  border-radius: 0.3rem;
`;

export const Button = styled.button`
  padding: 1rem 1.6rem;
  border-radius: 0.3rem;
  border: none;
  color: var(--white);
  background: var(--green-200);
  transition: 0.3s;

  &:hover {
    filter: brightness(0.9);
  }
`;