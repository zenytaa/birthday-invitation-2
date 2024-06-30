import styled from "styled-components";
import { Container, Section } from "../components/Container";
import { Header, HeaderWrapper } from "../components/Header";
import { fontFamily } from "../assets/styles/font";
import WishesForm from "../components/WishesForm";

const WishesSection = styled(Section)`
  height: 100%;
  flex-direction: column;
  padding: 30px 0px;
`;

const WishesContainer = styled(Container)`
  height: 100%;
  margin: 5px 0px;
  padding: 0px;
  width: 80%;

  p {
    color: #f8f8f8;
    font-weight: 700;
    ${fontFamily.secondary}
  }
`;

const WishesPage = () => {
  return (
    <WishesSection>
      <WishesContainer>
        <HeaderWrapper>
          <Header fontSize="1.5rem">Aku Harap ..</Header>
        </HeaderWrapper>
        <p>Kirim Harapanmu Untuk Ara dan Ina Yuk!</p>
        <WishesForm />
      </WishesContainer>
    </WishesSection>
  );
};

export default WishesPage;
