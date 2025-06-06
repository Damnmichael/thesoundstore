"use client";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import Container from "../../../components/Container";
import data from "../../../../data/data.json";
import CategorySection from "../../../components/CategorySection";
import BestGearSection from "../../../components/BestGearSection";
import Footer from "../../../components/Footer";
import { useCart } from "../../../context/CartContext";

export default function EarphoneProductPage() {
  const { slug } = useParams();
  const product = data.find(
    (item) => item.slug === slug && item.category === "earphones"
  );
  const [quantity, setQuantity] = React.useState(1);
  const { addToCart } = useCart();
  if (!product) return <div>Product not found</div>;

  const getProductCategory = (slug) => {
    const product = data.find((item) => item.slug === slug);
    return product ? product.category : null;
  };

  const handleDecrease = () => {
    setQuantity((q) => (q > 1 ? q - 1 : 1));
  };
  const handleIncrease = () => {
    setQuantity((q) => q + 1);
  };

  return (
    <>
      <Container>
        <MainSection>
          <ProductImageWrapper>
            <Image
              src={product.image.desktop.replace("./", "/")}
              alt={product.name}
              width={540}
              height={560}
              style={{ objectFit: "cover", borderRadius: "8px" }}
            />
          </ProductImageWrapper>
          <ProductInfo>
            {product.new && <NewProductText>NEW PRODUCT</NewProductText>}
            <ProductName>{product.name.toUpperCase()}</ProductName>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductPrice>$ {product.price.toLocaleString()}</ProductPrice>
            <ProductActions>
              <QuantitySelector>
                <button
                  style={{
                    color: "#000000",
                    fontWeight: "bold",
                    fontSize: "13px",
                    opacity: quantity === 1 ? "25%" : "100%",
                    cursor: quantity === 1 ? "not-allowed" : "pointer",
                  }}
                  onClick={handleDecrease}
                  disabled={quantity === 1}
                >
                  -
                </button>
                <span
                  style={{
                    color: "#000000",
                    fontWeight: "bold",
                    fontSize: "13px",
                  }}
                >
                  {quantity}
                </span>
                <button
                  style={{
                    color: "#000000",
                    fontWeight: "bold",
                    fontSize: "13px",
                  }}
                  onClick={handleIncrease}
                >
                  +
                </button>
              </QuantitySelector>
              <AddToCartButton onClick={() => addToCart(product, quantity)}>
                ADD TO CART
              </AddToCartButton>
            </ProductActions>
          </ProductInfo>
        </MainSection>
        <FeaturesSection>
          <Features>
            <SectionTitle>FEATURES</SectionTitle>
            <FeaturesText>
              {product.features.split("\n").map((line, idx) => (
                <span key={idx}>
                  {line}
                  <br />
                </span>
              ))}
            </FeaturesText>
          </Features>
          <InTheBox>
            <SectionTitle>IN THE BOX</SectionTitle>
            <ul>
              {product.includes.map((item, idx) => (
                <li key={idx}>
                  <span className="qty">{item.quantity}x</span>{" "}
                  <span>{item.item}</span>
                </li>
              ))}
            </ul>
          </InTheBox>
        </FeaturesSection>
        <GallerySection>
          <GalleryColumn>
            <GalleryImage>
              <Image
                src={product.gallery.first.desktop.replace("./", "/")}
                alt="Gallery 1"
                width={445}
                height={280}
                style={{ objectFit: "cover", borderRadius: "8px" }}
              />
            </GalleryImage>
            <GalleryImage>
              <Image
                src={product.gallery.second.desktop.replace("./", "/")}
                alt="Gallery 2"
                width={445}
                height={280}
                style={{ objectFit: "cover", borderRadius: "8px" }}
              />
            </GalleryImage>
          </GalleryColumn>
          <GalleryImageLarge>
            <Image
              src={product.gallery.third.desktop.replace("./", "/")}
              alt="Gallery 3"
              width={635}
              height={592}
              style={{ objectFit: "cover", borderRadius: "8px" }}
            />
          </GalleryImageLarge>
        </GallerySection>
        <AlsoLikeSection>
          <SectionTitle style={{ textAlign: "center", width: "100%" }}>
            YOU MAY ALSO LIKE
          </SectionTitle>
          <AlsoLikeList>
            {product.others.map((other) => {
              const category = getProductCategory(other.slug);
              return (
                <AlsoLikeItem key={other.slug}>
                  <Image
                    src={other.image.desktop.replace("./", "/")}
                    alt={other.name}
                    width={350}
                    height={318}
                    style={{ objectFit: "cover", borderRadius: "8px" }}
                  />
                  <h3>{other.name.toUpperCase()}</h3>
                  {category && (
                    <Link
                      href={`/${category}/${other.slug}`}
                      passHref
                      legacyBehavior
                    >
                      <ProductButton>SEE PRODUCT</ProductButton>
                    </Link>
                  )}
                </AlsoLikeItem>
              );
            })}
          </AlsoLikeList>
        </AlsoLikeSection>
        <div style={{ marginTop: "160px" }}>
          <CategorySection />
        </div>
        <BestGearSection />
      </Container>
      <Footer />
    </>
  );
}

const MainSection = styled.div`
  display: flex;
  gap: 120px;
  margin: 120px 0 80px 0;
`;

const ProductImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
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
  font-weight: 500;
`;

const ProductPrice = styled.div`
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1.2px;
  color: #000000;
`;

const ProductActions = styled.div`
  display: flex;
  gap: 16px;
`;

const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
  background: #f1f1f1;
  border-radius: 8px;
  padding: 8px 16px;
  gap: 16px;
  button {
    background: none;
    border: none;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    color: #000;
    padding: 0 8px;
  }
  span {
    min-width: 24px;
    text-align: center;
    font-size: 16px;
  }
`;

const AddToCartButton = styled.button`
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
  transition: background 0.2s;
  &:hover {
    background-color: #fbaf85;
    color: #fff;
  }
`;

const FeaturesSection = styled.div`
  display: flex;
  gap: 120px;
  margin: 80px 0;
`;

const Features = styled.div`
  flex: 2;
`;

const FeaturesText = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: #000000;
  opacity: 50%;
  line-height: 25px;
`;

const InTheBox = styled.div`
  flex: 1;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    font-size: 15px;
    font-weight: 500;
    color: #000;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    line-height: 25px;
    .qty {
      color: #d87d4a;
      font-weight: bold;
      margin-right: 12px;
      opacity: 1;
    }
    span:not(.qty) {
      opacity: 0.5;
    }
  }
`;

const SectionTitle = styled.h3`
  font-size: 32px;
  font-weight: bold;
  line-height: 36px;
  letter-spacing: 1.2px;
  color: #000;
  margin-bottom: 32px;
`;

const GallerySection = styled.div`
  display: flex;
  gap: 30px;
  margin: 80px 0;
`;

const GalleryColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const GalleryImage = styled.div`
  width: 445px;
  height: 280px;
  position: relative;
`;

const GalleryImageLarge = styled.div`
  width: 635px;
  height: 592px;
  position: relative;
`;

const AlsoLikeSection = styled.div`
  margin: 120px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AlsoLikeList = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 40px;
`;

const AlsoLikeItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  h3 {
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 1.2px;
    color: #000;
    margin: 0;
  }
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
