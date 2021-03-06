import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1rem 0;
  background-color: variables.$primary;
  z-index: 1;
`;

export const Link = styled.div`
  text-decoration: none;
  font-size: 1.6rem;
`;
