import styled from "styled-components";

export const AlienWrapper = styled.div`
  display: flex;
  position: absolute;
  justify-content: flex-end;
  z-index: 1;
  padding: 0px 20px;
  height: 100px;
  ${(props) => (props.right ? "right:0" : "left:0")};

  @media (min-width: 769px) {
    z-index: 1;
    height: 200px;
  }
`;
