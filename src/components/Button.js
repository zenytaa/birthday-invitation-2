import styled, { keyframes } from "styled-components";
import { fontFamily } from "../assets/styles/font";

const pressAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
`;

export const Button = styled.button`
  width: 200px;
  height: 50px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f8f8;
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.32);
  -webkit-box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.32);
  -moz-box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.32);

  ${fontFamily.secondary}

  span {
    font-size: 1.1rem;
    color: rgb(142, 142, 142);
    font-weight: 600;
  }

  &:active {
    animation: ${pressAnimation} 0.2s ease-in-out;
  }

  @media (min-width: 769px) {
    height: 55px;
    width: 220px;
  }
`;
