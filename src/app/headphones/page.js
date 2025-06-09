"use client";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import Container from "../../components/Container";
import data from "../../../data/data.json";
import CategorySection from "../../components/CategorySection";
import BestGearSection from "../../components/BestGearSection";
import Footer from "../../components/Footer";

const headphones = data
  .filter((item) => item.category === "headphones")
  .reverse();

export default function HeadphonesPage() {
  return (
    <>
      <HeaderSection>
        <HeaderTitle>HEADPHONES</HeaderTitle>
      </HeaderSection>
      <Container>
        <ProductsList>
          {headphones.map((product, idx) => (
            <ProductRow key={product.id} reverse={idx % 2 === 1}>
              <ProductImageWrapper>
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet={product.image.mobile.replace("./", "/")}
                  />
                  <source
                    media="(max-width: 1023px)"
                    srcSet={product.image.tablet.replace("./", "/")}
                  />
                  <img
                    src={product.image.desktop.replace("./", "/")}
                    alt={product.name}
                    width={540}
                    height={560}
                    style={{
                      objectFit: "cover",
                      borderRadius: "8px",
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </picture>
              </ProductImageWrapper>
              <ProductInfo>
                {product.new && <NewProductText>NEW PRODUCT</NewProductText>}
                <ProductName>{product.name.toUpperCase()}</ProductName>
                <ProductDescription>{product.description}</ProductDescription>
                <Link
                  href={`/${product.category}/${product.slug}`}
                  passHref
                  legacyBehavior
                >
                  <ProductButton>SEE PRODUCT</ProductButton>
                </Link>
              </ProductInfo>
            </ProductRow>
          ))}
        </ProductsList>
        <CategorySection />
        <BestGearSection />
      </Container>
      <Footer />
    </>
  );
}

const HeaderSection = styled.section`
  width: 100vw;
  background: #141414;
  padding: 96px 0 96px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderTitle = styled.h1`
  color: #fff;
  font-size: 40px;
  font-weight: bold;
  letter-spacing: 2px;
`;

const ProductsList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 160px;
  margin-bottom: 160px;
  gap: 160px;

  @media (max-width: 1023px) {
    margin-top: 96px;
    margin-bottom: 96px;
    gap: 120px;
  }

  @media (max-width: 767px) {
    margin-top: 64px;
    margin-bottom: 64px;
    gap: 56px;
  }
`;

const ProductRow = styled.div`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  align-items: center;
  gap: 125px;

  @media (max-width: 1023px) {
    flex-direction: column;
    gap: 56px;
  }

  @media (max-width: 767px) {
    gap: 32px;
  }
`;

const ProductImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 540px;

  @media (max-width: 1023px) {
    max-width: 100%;
  }
`;

const ProductInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;

  @media (max-width: 1023px) {
    align-items: center;
    text-align: center;
  }
`;

const NewProductText = styled.span`
  color: #d87d4a;
  font-size: 14px;
  letter-spacing: 10px;
  font-weight: normal;

  text-transform: uppercase;
`;

const ProductName = styled.h2`
  font-size: 40px;
  font-weight: bold;
  letter-spacing: 1.2px;
  color: #000000;
  line-height: 44px;
`;

const ProductDescription = styled.p`
  font-size: 15px;
  line-height: 25px;

  color: #000000;
  opacity: 50%;
`;

const ProductButton = styled.a`
  background-color: #d87d4a;
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 16px 32px;
  border: none;
  border-radius: 0;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.2s;
  &:hover {
    background-color: #fbaf85;
    color: #fff;
  }
`;
