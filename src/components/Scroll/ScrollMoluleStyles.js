import styled from 'styled-components';


export const Scroll = styled.div`

 display: none;
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    &__hidden {
      display: flex;
      justify-content: center;
      align-items: center;
      transition: opacity 1s;
      opacity: 0;
    }
  }
` 
 
export const ScrollIcon = styled.div `
@keyframes scrolDown {
  0% {
    transform: translate(0, 0);
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  80% {
    transform: translate(0, 15px);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

@-webkit-keyframes scrolDown {
  0% {
    -webkit-transform: translate(0, 0);
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  80% {
    -webkit-transform: translate(0, 15px);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

margin-top: 1rem;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: variables.$white;
letter-spacing: 0.1em;
text-decoration: none;
transition: opacity 0.3s;
  p {
    margin: 0;
  }
  &:hover {
    opacity: 0.5;
  }
  span {
    position: relative;
    width: 15px;
    height: 25px;
    border: 1px solid #fff;
    border-radius: 50px;
    box-sizing: border-box;
    &:before {
      position: absolute;
      top: 2px;
      left: 55%;
      content: "";
      width: 3px;
      height: 3px;
      margin-left: -2.5px;
      background-color: #fff;
      border-radius: 100%;
      -webkit-animation: scrolDown 2s infinite;
      animation: scrolDown 2s infinite;
      box-sizing: border-box;
    }
  }
`