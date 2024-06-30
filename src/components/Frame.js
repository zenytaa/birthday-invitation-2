import styled from "styled-components";
import { Image } from "./Image";

export const Frame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 250px;
  border: white 5px solid;
  margin: 5px auto;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.32);
  -webkit-box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.32);
  -moz-box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.32);

  z-index: 1001;

  @media (min-width: 769px) {
    height: 350px;
    width: 350px;
  }
`;

export const Picture = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
