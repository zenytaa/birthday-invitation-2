import { Button } from "../components/Button";
import { Container, Section } from "../components/Container";
import homeButton from "../assets/home.svg";
import { fontFamily } from "../assets/styles/font";

import { motion } from "framer-motion";
import styled from "styled-components";
import { Image } from "../components/Image";
import { useNavigate } from "react-router-dom";
import { Frame, Picture } from "../components/Frame";
import { Header, HeaderWrapper } from "../components/Header";
import CounterPageSection from "./CounterPage";
import WishesPageSection from "./WishesPage";

import pict1 from "../assets/pict1.jpg";
import pict2 from "../assets/pict2.jpg";
import wavePink from "../assets/wavePink.svg";
import waveBlue from "../assets/waveBlue.svg";
import alienAnim from "../assets/lottie/alien-anim.json";

import LocationPage from "./LocationPage";
import Lottie from "lottie-react";
import { AlienWrapper } from "../components/Alien";
import BackgroundMusic from "../components/BackgroundMusic";
import backgroundMusicFile from "../assets/backgroundMusicFile.mp3";

import ToastAlert from "../components/ToastAlert";

export const FixedButton = styled(Button)`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  align-self: center;
  position: fixed;
  bottom: 30px;
  right: 18px;
  z-index: 999;
  opacity: 0.7;
  @media (min-width: 769px) {
    right: 40px;
    height: 60px;
    width: 60px;
  }
`;

const HomePageSection = styled(Section)`
  height: 100%;
  flex-direction: column;
  overflow: hidden;
  position: relative;
`;

const HomePageContainer = styled(Container)`
  height: 100%;
  gap: 0px;
  padding: 20px 0px;

  @media (min-width: 769px) {
    padding-top: 40px;
  }
`;

const PictureContainer = styled.div`
  margin: 30px 0px;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

const PictureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    ${fontFamily.secondary};
    color: white;
  }

  @media (min-width: 769px) {
    gap: 20px;
    justify-content: center;
  }
`;

const BgImage = styled.div`
  height: 100%;
  width: 100%;
  // background-image: url(https://unsplash.com/photos/XtAb8y5-yxI/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzE5NTY1Nzc2fA&force=true);
  filter: blur(3px);
  // background-position: center;
  background-size: cover;
  position: absolute;
`;

const BlueBridge = styled.div`
  background-color: lightblue;
  position: relative;
  width: 100%;
  // height: 200px;
`;

const PinkBridge = styled.div`
  background-color: pink;
  position: relative;
  width: 100%;
`;

const DoubleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-item: center;
  background-color: lightblue;

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const HomePage = () => {
  const navigate = useNavigate();

  const animationStyle = {
    height: "100%",
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <HomePageSection>
          <ToastAlert />
          <BackgroundMusic src={backgroundMusicFile} />
          <BgImage />
          <HomePageContainer>
            <HeaderWrapper>
              <Header fontSize="2rem" primary>
                Happy Birthday
              </Header>
            </HeaderWrapper>
            <PictureContainer>
              <PictureWrapper>
                <Frame>
                  <Picture src={pict1} />
                </Frame>
                <h2>Kyana Zen Aldiva</h2>
              </PictureWrapper>
              <PictureWrapper>
                <Frame>
                  <Picture src={pict2} />
                </Frame>
                <h2>Kyara Zen Aldiva</h2>
              </PictureWrapper>
            </PictureContainer>
          </HomePageContainer>
          <FixedButton onClick={() => navigate("/")}>
            <Image src={homeButton} />
          </FixedButton>
        </HomePageSection>

        <BlueBridge>
          <AlienWrapper right>
            <Lottie animationData={alienAnim} style={animationStyle} />
          </AlienWrapper>
          <Image src={wavePink} />
        </BlueBridge>

        <DoubleWrapper>
          <CounterPageSection />
          <LocationPage />
        </DoubleWrapper>

        <PinkBridge>
          <AlienWrapper>
            <Lottie animationData={alienAnim} style={animationStyle} />
          </AlienWrapper>
          <Image src={waveBlue} />
        </PinkBridge>

        <WishesPageSection />
      </motion.div>
    </>
  );
};

export default HomePage;
