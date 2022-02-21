import styled from "styled-components";

export const Container = styled.footer``;

export const Content = styled.section`
  padding: 2.5rem 2rem;
`;

export const Paragraph = styled.p`
  color: var(--blue-700);
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

export const Unlist = styled.ul`
  display: flex;
  justify-content: space-between;

  width: 18rem;
`;

export const List = styled.li``;

export const Anchor = styled.a`
  color: var(--grey-500);

  &:hover {
    filter: brightness(0.8);
  }
`;
