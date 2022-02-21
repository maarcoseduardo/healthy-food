import { Link } from "react-scroll";
import styled from "styled-components";

export const HeaderContent = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
  background-color: ${({ scroll }) => (scroll ? "var(--green-200)" : "")};
  transition: 0.3s;
`;

export const Content = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  padding: 0 2rem;
`;
export const Div = styled.div``;

export const HealthLogoText = styled.h1`
  font-weight: 700;
  font-size: 32px;
  transition: 0.3s;
  @media (min-width: 901px) {
    color: ${({ scroll }) => (scroll ? "white" : "var(--green-200)")};
  }

  @media (max-width: 900px) {
    font-size: 24px;
    color: ${({ open }) => (open ? "var(--green-200)" : "white")};
  }
`;

export const Nav = styled.nav``;

export const UnlistContent = styled.div`
  @media (max-width: 799px) {
    background: white;
    width: 100%;
    position: fixed;
    top: 0px;
    right: 0px;
    height: 100vh;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    transition: transform 0.3s ease-in-out 0s;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const UnList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  @media (max-width: 799px) {
    flex-direction: column;
    padding: 8rem 0;
  }
`;

export const List = styled.li`
  color: var(--white);
  font-size: 1rem;
  font-weight: 700;
  font-family: "Mulish";

  @media (max-width: 799px) {
    color: var(--green-200);
  }
`;

export const Anchor = styled(Link)`
  transition: 0.3s;
  z-index: 1;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const RegisterAnchor = styled.a`
  transition: 0.3s;
  padding: 1rem 1.6rem;
  border-radius: 0.3rem;
  background: var(--white);
  font-weight: 700;
  color: var(--green-200);

  @media (max-width: 799px) {
    background: var(--green-200);
    color: var(--white);
  }
  
  &:hover {
    filter: brightness(0.8);
  }
`;
