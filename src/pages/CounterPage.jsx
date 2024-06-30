import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Container, Section } from "../components/Container";
import { fontFamily } from "../assets/styles/font";
import { Header, HeaderWrapper } from "../components/Header";

const CounterSection = styled(Section)`
  height: 100%;
  flex-direction: column;
  background-color: lightblue;
  padding: 20px 0px;

  @media (min-width: 769px) {
    width: 50%;
  }
`;

const CounterContainer = styled(Container)`
  height: 100%;
  border: 1px solid white;
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 10px;
  padding: 10px 20px;
  display: flex;

  width: 80%;

  @media (min-width: 769px) {
    padding: 30px 15px;
  }
`;

const Counter = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  font-size: 2em;
  font-weight: 700;
  ${fontFamily.secondary};
  color: white;
  width: 100%;

  section {
    p {
      display: flex;
      flex-direction: column;
      small {
        font-size: 1.2rem;
      }
    }
  }

  @media (min-width: 769px) {
    font-size: 3em;
  }
`;

const CounterPage = () => {
  const [timerDays, setTimerDays] = useState(0);
  const [timerHours, setTimerHours] = useState(0);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("July 05 2024 14:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <>
      <CounterSection>
        <HeaderWrapper column>
          <Header fontSize="1rem">Kapan nih acaranya?</Header>
          <Header fontSize="1.5rem">5 July 2024</Header>
          <Header fontSize="1rem">14:00 WIB</Header>
        </HeaderWrapper>
        <CounterContainer>
          <Counter>
            <section>
              <p>{timerDays}</p>
              <p>
                <small>Hari</small>
              </p>
            </section>
            <span>:</span>
            <section>
              <p>{timerHours}</p>
              <p>
                <small>Jam</small>
              </p>
            </section>
            <span>:</span>
            <section>
              <p>{timerMinutes}</p>
              <p>
                <small>Menit</small>
              </p>
            </section>
            <span>:</span>
            <section>
              <p>{timerSeconds}</p>
              <p>
                <small>Detik</small>
              </p>
            </section>
          </Counter>
        </CounterContainer>
      </CounterSection>
    </>
  );
};

export default CounterPage;
