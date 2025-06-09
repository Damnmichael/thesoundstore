import styled from "styled-components";
import Image from "next/image";
import BestGearImage from "../../public/assets/shared/desktop/image-best-gear.jpg";

export default function BestGearSection() {
  return (
    <Section>
      <Text>
        <Title>
          BRINGING YOU THE <Highlight>BEST</Highlight>
          <br />
          AUDIO GEAR
        </Title>
        <Description>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </Description>
      </Text>
      <ImageContainer>
        <Image
          src={BestGearImage}
          alt="Bringing you the best audio gear"
          fill
          style={{ objectFit: "cover", borderRadius: "8px" }}
        />
      </ImageContainer>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  width: 1110px;
  height: 588px;
  margin: 80px auto 0 auto;
  border-radius: 8px;
  overflow: hidden;
  background: transparent;

  @media (max-width: 1110px) {
    width: 100%;
    max-width: 100vw;
    margin: 80px 24px 0 24px;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    width: 100%;
    height: auto;
    margin: 56px 24px 0 24px;
    border-radius: 0;
    align-items: center;
    padding: 0;
  }
`;

const Text = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 95px 0 0;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;

    padding: 32px 0 0 0;
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  line-height: 44px;
  margin-bottom: 32px;
  color: #000;
  max-width: 80%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Highlight = styled.span`
  color: #d87d4a;
`;

const Description = styled.p`
  font-size: 15px;
  color: #000000;
  font-weight: 500;
  line-height: 25px;
  opacity: 50%;

  @media (max-width: 768px) {
    width: 60ch;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  position: relative;
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
    height: 320px;
    min-height: 220px;
    margin-bottom: 32px;
    overflow: hidden !important;

    display: flex;
  }

  & > img {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
    border-radius: 8px !important;

    @media (max-width: 768px) {
      position: relative !important;
      border-radius: 8px !important;

      height: 320px !important;
    }
  }
`;
