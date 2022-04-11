import styled from "styled-components";
 

export const CursorDot = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  border-radius: 50%;
  z-index: 10000;
  pointer-events: none;
  width: 10px;
  height: 10px;
  background-color: var(--smallCursor);
  z-index: 10001;
  @media screen and (max-width: 768px) {
    display: none;
    cursor: pointer;
  }
`;
export const CursorOutline = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  border-radius: 50%;
  z-index: 10000;
  pointer-events: none;
  width: 40px;
  height: 40px;
  border: 1px solid ;
  background-color: var(--bigCursor);
  // opacity: 1;
  filter: invert(0.1);

  @media screen and (max-width: 768px) {
    display: none;
    cursor: pointer;
  }
`;
