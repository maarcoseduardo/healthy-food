import styled from "styled-components";

export const ReadContent = styled.div`
  overflow: hidden;
`;

export const Container = styled.section`
  max-width: 83%;
  margin-top: 6rem;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: var(--blue-700);

  @media (min-width: 2000px) {
    font-size: 3.5rem;
  }
`;

export const Subtitle = styled.p`

  margin-top: 1rem;
  line-height: 0.7rem;
  color: var(--grey-500);

  @media (max-width: 450px) {
    line-height: 1.2rem;
  }

  @media (min-width: 2000px) {
    font-size: 1.8rem;
    line-height: 2.2rem;
  }
`;

export const CardContainer = styled.div`
  width: 112%;
`;