import styled from "styled-components";

export const Bullet = styled.div``;

export const Burguer = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 20;
  display: none;

  @media (max-width: 800px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.15rem;
    background: ${({ open }) => (open ? "var(--green-200);" : "var(--white)")};
    border-radius: 0.8rem;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
