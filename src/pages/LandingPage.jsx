import styled from "styled-components";

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
import { FixedButton } from "./HomePage";
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
  padding-left: 65px;
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
    }, 5000);

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
    }, 5000);

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
              <Button style={{ height: "47px" }}>
                <Image src={envelopeIcon} onClick={() => navigate("/home")} />
              </Button>
              <FixedButton
                style={{
                  position: "static",
                  height: "47px",
                  width: "47px",
                  bottom: "0",
                  right: "0",
                }}
                onClick={handleClick}
                disable={animationActive}
                key={confettiKey}
              >
                <Image src={confettiIcon} />
              </FixedButton>
            </ButtonWrapper>
          </LandingContainer>
        </Section>
      </motion.div>
    </>
  );
};

export default LandingPage;
