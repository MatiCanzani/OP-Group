import styled from "styled-components";

export const HeroContainer = styled.section`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 95%;
  position: relative;
  @media (min-width: 768px) {
    margin: 0 auto;
    align-items: center;
    flex-direction: column;
    padding-bottom: 5rem;
  }
`;
