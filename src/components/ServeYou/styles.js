import styled from "styled-components";
import BgBlockService from "../../assets/bloco_services.svg";

export const ServeYouContent = styled.div`
  background: url(${BgBlockService.src}) no-repeat;
  background-position: top left;
  background-size: contain;
  height: 45rem;
  position: relative;

  @media (max-width: 600px) {
    background-size: cover;
  }
`;

export const Container = styled.section`
  height: inherit;
`;

export const Content = styled.div`
  height: inherit;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Div = styled.div`
  max-width: 30rem;

  @media (max-width: 900px) {
    background: rgba(255, 255, 255, 0.2);
    width: 100%;
    margin: 0 auto;
    backdrop-filter: blur(5px);
    padding: 2rem;
    border-radius: 0.5rem;
  }
`;

export const Title = styled.h1`
  max-width: 25rem;
  color: var(--blue-400);
`;

export const Paragraph = styled.p`
  margin: 2rem 0;
  max-width: 24rem;
  color: var(--grey-300);
`;

export const Anchor = styled.a`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.8rem 1.8rem;
  border-radius: 0.3rem;
  background-color: var(--green-200);
  color: var(--white);
  transition: 0.3s;
  box-shadow: 0 5px 20px var(--green-200);

  &:hover {
    filter: brightness(0.9);
  }
`;
