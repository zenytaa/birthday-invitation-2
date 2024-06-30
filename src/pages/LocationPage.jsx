import styled from "styled-components";
import { Container, Section } from "../components/Container";
import { Header, HeaderWrapper } from "../components/Header";
import Maps from "../components/Maps";

import { fontFamily } from "../assets/styles/font";
import { Button } from "../components/Button";

const LocationSection = styled(Section)`
  height: 100%;
  flex-direction: column;
  padding: 20px 0px;
  background-color: lightblue;

  @media (min-width: 769px) {
    width: 50%;
  }
`;

const MapContainer = styled.div`
  height: 330px;
  width: 80%;
  border: 0.5px solid white;
  margin-top: 16px;
  margin-bottom: 16px;
  padding: 0;
  border-radius: 10px;
`;

const DetailContainer = styled(Container)`
  height: 100%;
  padding: 10px 0px;
  align-items: start;

  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    list-style-type: none;
    ${fontFamily.secondary};
    color: #f8f8f8;
    font-size: 1rem;
    align-items: center;
    width: 100%;

    @media (min-width: 769px) {
      justify-content: center;
      gap: 15px;
    }

    li {
      font-weight: 600;
      text-align: center;

      img {
        padding-top: 20px;
        width: 40px;
      }
    }
  }
`;

const LocationPage = () => {
  const openMapInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <LocationSection>
      <HeaderWrapper column>
        <Header fontSize="1rem">Lokasinya di mana?</Header>
      </HeaderWrapper>
      <MapContainer>
        <Maps />
      </MapContainer>
      <DetailContainer>
        <ul>
          <li>
            <Button
              onClick={() =>
                openMapInNewTab("https://maps.app.goo.gl/RUdXuDsvFGbtRWw2A")
              }
            >
              <span>Buka Maps</span>
            </Button>
          </li>
          <li>Jalan Brigjen Katamso, LPK Pribadi, Purwokerto Timur</li>
          <li>(Belakang Bekas Toko Benang Raja)</li>
        </ul>
      </DetailContainer>
    </LocationSection>
  );
};

export default LocationPage;
