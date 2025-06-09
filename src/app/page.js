"use client";

import styled from "styled-components";
import Image from "next/image";
import HeroImage from "../../public/assets/home/desktop/image-hero.jpg";
import Button from "../components/Button";
import CategorySection from "../components/CategorySection";
import PatternCircles from "../../public/assets/home/desktop/pattern-circles.svg";
import ZX9SpeakerImage from "../../public/assets/home/desktop/image-speaker-zx9.png";
import ZX7SpeakerImage from "../../public/assets/home/desktop/image-speaker-zx7.jpg";
import YX1EarphonesImage from "../../public/assets/home/desktop/image-earphones-yx1.jpg";
import BestGearImage from "../../public/assets/shared/desktop/image-best-gear.jpg";
import Footer from "../components/Footer";
import Container from "../components/Container";
import BestGearSection from "../components/BestGearSection";
import Link from "next/link";
import data from "../../data/data.json";

export default function Home() {
  const getProductCategoryAndSlug = (name) => {
    const product = data.find((item) =>
      item.name.toLowerCase().includes(name.toLowerCase())
    );
    return product ? { category: product.category, slug: product.slug } : null;
  };

  const heroProduct = getProductCategoryAndSlug("XX99 Mark II Headphones");
  const zx9Product = getProductCategoryAndSlug("ZX9 Speaker");
  const zx7Product = getProductCategoryAndSlug("ZX7 Speaker");
  const yx1Product = getProductCategoryAndSlug("YX1 Wireless Earphones");

  return (
    <>
      <HeroSection>
        <Container style={{ display: "flex" }}>
          <LeftContainer>
            <TextAndButtonContainer>
              <LeftContent>
                <NewProductText>NEW PRODUCT</NewProductText>
                <ProductName>XX99 MARK II HEADPHONES</ProductName>
                <ProductDescription>
                  Experience natural, lifelike audio and exceptional build
                  quality made for the passionate music enthusiast.
                </ProductDescription>
              </LeftContent>
              {heroProduct && (
                <Link
                  href={`/${heroProduct.category}/${heroProduct.slug}`}
                  passHref
                  legacyBehavior
                >
                  <Button variant="primary">See Product</Button>
                </Link>
              )}
            </TextAndButtonContainer>
          </LeftContainer>
          <HeroImageContainer>
            <Image
              src={HeroImage}
              alt="Hero"
              fill
              style={{ objectFit: "cover", inset: "auto -34% auto auto" }}
            />
          </HeroImageContainer>
        </Container>
      </HeroSection>
      <CategoryContainer>
        <CategorySection />
      </CategoryContainer>
      <MiddleSectionContainer>
        <ZX9SpeakerSection>
          <Image
            src={PatternCircles}
            alt="pattern circles"
            style={{
              position: "absolute",
              objectFit: "cover",
              top: 10,
              left: "-18%",
              width: "90%",
              // height: "100%",
              zIndex: 0,
            }}
          />
          <ZX9SpeakerImageContainer>
            <Image
              src={ZX9SpeakerImage}
              alt="ZX9 Speaker"
              style={{
                objectFit: "contain",
                width: "380px",
                height: "450px",
                position: "absolute",
                bottom: -10,
                right: 0,
              }}
            />
          </ZX9SpeakerImageContainer>
          <ZX9SpeakerContentContainer style={{ flex: 1 }}>
            <TextContainer>
              <TextTitle style={{ maxWidth: "350px" }}>ZX9 SPEAKER</TextTitle>
              <TextDescription style={{ maxWidth: "350px" }}>
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </TextDescription>
              {zx9Product && (
                <Link
                  href={`/${zx9Product.category}/${zx9Product.slug}`}
                  passHref
                  legacyBehavior
                >
                  <Button variant="secondary">See Product</Button>
                </Link>
              )}
            </TextContainer>
          </ZX9SpeakerContentContainer>
        </ZX9SpeakerSection>
        <ZX7SpeakerSection>
          <ZX7SpeakerContent>
            <ZX7TextContent>
              <ZX7Title>ZX7 SPEAKER</ZX7Title>
              {zx7Product && (
                <Link
                  href={`/${zx7Product.category}/${zx7Product.slug}`}
                  passHref
                  legacyBehavior
                >
                  <Button variant="tertiary">SEE PRODUCT</Button>
                </Link>
              )}
            </ZX7TextContent>
            <ZX7ImageBg style={{ width: "100%" }}>
              <Image
                src={ZX7SpeakerImage}
                alt="ZX7 Speaker"
                fill
                style={{ objectFit: "cover", borderRadius: "8px" }}
              />
            </ZX7ImageBg>
          </ZX7SpeakerContent>
        </ZX7SpeakerSection>
        <YX1EarphonesSection>
          <YX1EarphonesImageContainer>
            <Image
              src={YX1EarphonesImage}
              alt="YX1 Earphones"
              fill
              style={{ objectFit: "cover", borderRadius: "8px" }}
            />
          </YX1EarphonesImageContainer>
          <YX1EarphonesContent>
            <YX1Title>YX1 EARPHONES</YX1Title>
            {yx1Product && (
              <Link
                href={`/${yx1Product.category}/${yx1Product.slug}`}
                passHref
                legacyBehavior
              >
                <Button variant="tertiary">SEE PRODUCT</Button>
              </Link>
            )}
          </YX1EarphonesContent>
        </YX1EarphonesSection>
        <BestGearSection />
      </MiddleSectionContainer>
      <Footer />
    </>
  );
}

const HeroSection = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  background-color: #141414;
  height: 729px;

  @media (max-width: 768px) {
    & > section {
      justify-content: center;
      align-items: center;
      width: 100vw;
      height: 100vh;
      padding: 0 24px;
    }
  }
`;

const LeftContainer = styled.div`
  /* width: 45%; */
  height: 70vh;
  /* background-color: #141414; */
  z-index: 99;
  /* padding: 32px 165px; */

  @media (max-width: 768px) {
    margin-bottom: 5.75rem;
  }
`;

const HeroImageContainer = styled.div`
  width: 789px;
  height: 729px;
  overflow: hidden;
  position: relative;
  z-index: 0;

  & img {
    mix-blend-mode: luminosity;
    width: auto !important;
  }

  @media (max-width: 768px) {
    position: absolute;
    inset: 0;
    width: 100vw;
    height: 100%;

    & img {
      opacity: 50%;
      inset: auto -12% auto auto !important;
    }
  }

  @media (max-width: 480px) {
    & img {
      opacity: 50%;
      inset: auto -60% auto auto !important;
    }
  }
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

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    text-align: center;
  }
`;

const ProductDescription = styled.h1`
  font-weight: 500;
  font-size: 15px;
  opacity: 75%;
  line-height: 25px;
  max-width: 65%;
`;

const TextAndButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 120px 0;
`;

const MiddleSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    margin-inline: 40px;
  }
`;

const ZX9SpeakerSection = styled.div`
  display: flex;
  width: 1110px;
  height: 560px;
  background-color: #d87d4a;
  margin: auto;
  border-radius: 8px;
  position: relative;
  overflow: hidden;

  & > img {
    top: -260px !important;
    left: 0 !important;
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: fit-content;
    padding-top: 52px;
    padding-bottom: 64px;
    max-width: 90vw;
  }
`;

const TextTitle = styled.h1`
  font-weight: bold;
  font-size: 56px;
  line-height: 58px;
  padding-top: 40px;
`;

const PatternCircleBg = styled.img`
  position: absolute;
  object-fit: cover;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
`;

const ZX9SpeakerImageContainer = styled.div`
  flex: 1;

  height: 100%;
  position: relative;

  bottom: 0px;
  z-index: 1;

  & img {
    position: relative !important;
    @media (max-width: 768px) {
      width: 197px !important;
      height: auto !important;
    }
  }

  @media (max-width: 768px) {
    display: grid;
    place-items: center;
    width: 607px;
    height: 100%;
  }
`;

const ZX9SpeakerContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (max-width: 768px) {
    align-items: center;
  }
`;

const TextDescription = styled.h1`
  font-weight: 500;
  font-size: 15px;
  opacity: 75%;
  line-height: 25px;
  max-width: 85%;
`;

const ZX7SpeakerSection = styled.div`
  display: flex;
  width: 1110px;
  height: 320px;
  background: #f1f1f1;
  margin: 40px auto 0 auto;
  border-radius: 8px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    max-width: 689px;
  }
`;

const ZX7SpeakerContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
`;

const ZX7TextContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 95px;
  z-index: 1;
`;

const ZX7Title = styled.h1`
  font-size: 28px;
  color: #000000;
  font-weight: bold;
  letter-spacing: 2px;
  margin-bottom: 32px;
`;

const ZX7ImageBg = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 60%;
  height: 100%;
  z-index: 0;
  @media (max-width: 768px) {
    max-width: 689px;
  }
`;

const YX1EarphonesSection = styled.div`
  display: flex;
  width: 1110px;
  height: 320px;
  margin: 40px auto 0 auto;
  border-radius: 8px;
  overflow: hidden;
  column-gap: 30px;
  @media (max-width: 768px) {
    max-width: 689px;
    gap: 11px;
  }
`;

const YX1EarphonesImageContainer = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
`;

const YX1EarphonesContent = styled.div`
  width: 50%;
  height: 100%;
  background: #f1f1f1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const YX1Title = styled.h1`
  font-size: 28px;
  color: #000000;
  font-weight: bold;
  letter-spacing: 2px;
  margin-bottom: 32px;
`;
