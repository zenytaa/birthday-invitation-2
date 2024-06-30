import styled from "styled-components";
import { fontFamily } from "../assets/styles/font";
// import { fontFamily } from "../assets/styles/font";

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
`;

export const Header = styled.h1`
  font-size: ${(props) => props.fontSize || "2.5rem"};
  color: White;
  font-weight: 700;
  ${fontFamily.primary};
  @media (min-width: 769px) {
    // font-size: 3rem;
  }
`;

// ${(props) =>
//   props.primary ? "${fontFamily.secondary}" : "${fontFamily.primary}"}
