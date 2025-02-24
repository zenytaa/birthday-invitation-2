import styled, { keyframes } from "styled-components";

import cakeImg from "../assets/cake.svg";
import envelopeIcon from "../assets/envelope.svg";
import confettiIcon from "../assets/confetti-icon.svg";

import { Container, Section } from "../components/Container";
import { Button } from "../components/Button";
import { Header, HeaderWrapper } from "../components/Header";
import { Image } from "../components/Image";
import { useCallback, useEffect, useState } from "react";
import Lottie from "lottie-react";
import { ConfettiWrapper } from "../components/Confetti";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import confettiAnimationData from "../assets/lottie/confetti-animation.json";
import BackgroundMusic from "../components/BackgroundMusic";
import backgroundMusicFile from "../assets/backgroundMusicFile.mp3";
import Ballons from "../components/Ballons";

const CakeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  position: relative;
`;

const LandingContainer = styled(Container)`
  justify-content: space-evenly;

  @media (min-width: 769px) {
    padding-bottom: 20px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  justify-content: center;
`;

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

const ConfettiButton = styled.button`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  align-self: center;
  position: fixed;
  bottom: 30px;
  right: 20px;
  z-index: 999;
  opacity: 0.7;
  border: none;
  cursor: pointer;

  transform: scaleX(-1);

  @media (min-width: 769px) {
    right: 40px;
    height: 60px;
    width: 60px;
  }

  &:active {
    animation: ${pressAnimation} 0.2s ease-in-out;
  }
`;

const LandingPage = () => {
  const [isShaking, setIsShaking] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiKey, setConfettiKey] = useState(0);
  const [animationActive, setAnimationActive] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setShowConfetti(true);
    setAnimationActive(true);

    const confettiTimer = setTimeout(() => {
      setShowConfetti(false);
      setAnimationActive(false);
    }, 4000);

    return () => clearTimeout(confettiTimer);
  }, []);

  const handleClick = useCallback(() => {
    setIsShaking(true);
    setConfettiKey((prevKey) => {
      return prevKey + 1;
    });
    setShowConfetti(true);

    const shakeTimer = setTimeout(() => {
      setIsShaking(false);
    }, 100);

    const confettiTimer = setTimeout(() => {
      setShowConfetti(false);
      setAnimationActive(false);
    }, 4000);

    return () => {
      clearTimeout(shakeTimer);
      clearTimeout(confettiTimer);
    };
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Section>
          <BackgroundMusic src={backgroundMusicFile} />
          <LandingContainer>
            <HeaderWrapper>
              <Header>You are Invited</Header>
            </HeaderWrapper>
            <CakeWrapper style={{ cursor: "pointer" }}>
              <Ballons />
              <Image
                style={{ width: "90%" }}
                src={cakeImg}
                isShaking={isShaking}
                onClick={handleClick}
              />
            </CakeWrapper>
            {showConfetti && (
              <ConfettiWrapper key={confettiKey}>
                <Lottie animationData={confettiAnimationData} />
              </ConfettiWrapper>
            )}
            <ButtonWrapper>
              <Button
                style={{ zIndex: "11111" }}
                onClick={() => navigate("/home")}
              >
                <Image src={envelopeIcon} />
              </Button>
              <ConfettiButton
                onClick={handleClick}
                disable={animationActive}
                key={confettiKey}
              >
                <Image style={{ height: "65%" }} src={confettiIcon} />
              </ConfettiButton>
            </ButtonWrapper>
          </LandingContainer>
        </Section>
      </motion.div>
    </>
  );
};

export default LandingPage;
