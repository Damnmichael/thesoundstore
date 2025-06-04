"use client";

import styled from "styled-components";
import Image from "next/image";
import HeroImage from "../../public/assets/home/desktop/image-hero.jpg";
import Button from "../components/Button";

export default function Home() {
  return (
    <HeroSection>
      <LeftContainer>
        <TextAndButtonContainer>
          <LeftContent>
            <NewProductText>NEW PRODUCT</NewProductText>
            <ProductName>XX99 MARK II HEADPHONES</ProductName>
            <ProductDescription>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </ProductDescription>
          </LeftContent>
          <ButtonContainer>
            <Button variant="primary">See Product</Button>
          </ButtonContainer>
        </TextAndButtonContainer>
      </LeftContainer>
      <Image
        src={HeroImage}
        alt="Hero"
        style={{
          width: "100%",
          zIndex: 0,
          height: "70vh",
          position: "absolute",
          left: 0,
          objectFit: "contain",
        }}
      />
    </HeroSection>
  );
}

const HeroSection = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  background-color: #141414;
`;

const LeftContainer = styled.div`
  width: 45%;
  height: 70vh;
  background-color: #141414;
  z-index: 99;
  padding: 32px 165px;
`;

const HeroImageContainer = styled.div`
  width: 100%;
  height: 70vh;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
  align-items: flex-end;
  justify-content: flex-end;
`;

const NewProductText = styled.h1`
  font-weight: normal;
  font-size: 14px;
  letter-spacing: 10px;
  opacity: 50%;
`;

const ProductName = styled.h1`
  font-weight: bold;
  font-size: 56px;
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 128px;
`;

const ProductDescription = styled.h1`
  font-weight: 500;
  font-size: 15px;
  opacity: 75%;
  line-height: 25px;
`;

const TextAndButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;
