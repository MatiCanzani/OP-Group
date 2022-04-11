import styled, {css} from "styled-components";

export const Menu = styled.nav`
  .menu {
    display: flex;
    align-items: center;
    gap: 3rem;
    height: 8vh;
    text-transform: uppercase;
    font-size: 1.6rem;
    a {
      text-decoration: none;
      will-change: transform;
      span {
        font-size: 4.5rem;
        @media (min-width: 768px) {
          font-size: 2rem;
        }
      }
    }
    & a:hover,
    :focus {
      color: variables.$yellow;
      transition: color 1s;
      transition: transform 650ms;
      transform: scale(1.1);
    }
  }



  /* @media screen and (max-width: 768px) {
    .nav__toggle {
      display: block;
    } */
    .menu {
      position: fixed;
      margin-top: 2.5rem;
      right: 0;
      width: 100%;
      height: 100vh;
      justify-content: center;
      flex-direction: column;
      font-size: 3rem;
      transform: translateX(100%);
      transition: 0.5s ease-in-out;
      background-color: variables.$menu-bg;

      a {
        color: variables.$white;
      }
    }

  //nav active class

  .nav__active {
    transform: translateX(0);
    z-index: 10;
  }
  .slide-right {
    -webkit-animation: slide-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
    animation: slide-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  

`;

// animation icon

export const NavToggle = css`
cursor: pointer;
height: auto;
/* div { */
  z-index: 9999;
  width: 2.5rem;
  height: 0.2rem;
  margin: 0.4rem;
  transition: 0.4s ease-in;
  background-color: var(--primary);
/* } */
`
 

export const Toggle = styled.div`
 display: block;
`;

export const Line1 = styled.div`
  -webkit-transform: rotate(-45deg) translate(-4px, 4px);
  transform: rotate(-45deg) translate(-4px, 4px);
`;
export const Line2 = styled.div`
  opacity: 0;
`;
export const Line3 = styled.div`
  transform: rotate(45deg) translate(-4px, -4px);
  -webkit-transform: rotate(45deg) translat(-4px, -4px);
`;
