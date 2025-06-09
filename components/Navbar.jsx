"use client";

import Image from "next/image";
import React from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import { useCart } from "../src/context/CartContext";
import { useRouter } from "next/navigation";
import CategorySection from "../src/components/CategorySection";

const Container = styled.nav`
  background-color: inherit;
  color: #fff;
  display: flex;
  align-items: center;
  width: 100%;
  z-index: 99;
  padding: 0px 165px;
  justify-content: space-between;
  background-color: #141414;
  @media (max-width: 1024px) {
    padding: 0px 32px;
  }
  @media (max-width: 768px) {
    padding: 0px 16px;
  }
`;

const ContentContainer = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  height: 80px;
  width: 100%;
  z-index: 99;
  padding: 32px 0px 36px 0px;
  justify-content: space-between;
  border-bottom: 1px solid #979797;
  @media (max-width: 1024px) {
    padding: 24px 0px 28px 0px;
  }
  @media (max-width: 768px) {
    padding: 16px 0px 18px 0px;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 34px;
  list-style: none;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const NavLink = styled.li`
  margin: 0 15px;
  font-weight: bold;
  font-size: 13px;
  cursor: pointer;
  &:hover {
    color: #d87d4a;
  }
`;

const CartIcon = styled.div`
  font-size: 24px;
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: #d87d4a;
  }
`;

const CartModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;

const CartModal = styled.div`
  background: #fff;
  color: #000;
  border-radius: 8px;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.2);
  width: 377px;
  margin-top: 120px;
  margin-right: 165px;
  padding: 32px 32px 24px 32px;
  z-index: 1001;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1.2px;
  margin: 0;
`;

const RemoveAll = styled.button`
  background: none;
  border: none;
  color: #000;
  opacity: 50%;
  font-size: 15px;
  font-weight: 500;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: #d87d4a;
  }
`;

const CartList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const CartItemImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 8px;
  object-fit: cover;
  background: #f1f1f1;
`;

const CartItemInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const CartItemName = styled.div`
  font-size: 15px;
  font-weight: bold;
`;

const CartItemPrice = styled.div`
  font-size: 14px;
  color: #000;
  font-weight: bold;
  opacity: 50%;
`;

const CartItemQty = styled.div`
  display: flex;
  align-items: center;
  background: #f1f1f1;
  /* border-radius: 8px; */
  padding: 8px 12px;
  gap: 12px;
  button {
    background: none;
    border: none;
    font-size: 16px;
    font-weight: bold;
    color: #7d7d7d;
    cursor: pointer;
    &:hover {
      color: #d87d4a;
    }
  }
  span {
    min-width: 20px;
    text-align: center;
    font-size: 13px;
    color: #000;
    font-weight: bold;
  }
`;

const CartTotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
`;

const CartTotalLabel = styled.div`
  font-size: 15px;
  color: #000;
  opacity: 50%;
  font-weight: 500;
`;

const CartTotalValue = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const CheckoutButton = styled.button`
  width: 100%;
  background: #d87d4a;
  color: #fff;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 16px 0;
  border: none;
  border-radius: 0;
  cursor: pointer;
  margin-top: 16px;
  transition: background 0.2s;
  &:hover {
    background: #fbaf85;
    color: #fff;
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  font-size: 32px;
  cursor: pointer;
  color: #fff;
  @media (max-width: 1024px) {
    display: block;
  }
  height: 40px;
  width: 40px;
  align-items: center;
  justify-content: center;
`;

const MobileMenuOverlay = styled.div`
  position: fixed;
  top: 80px; /* height of navbar */
  left: 0;
  width: 100vw;
  height: calc(100vh - 80px);
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
`;

const MobileMenuPanel = styled.div`
  background: #fff;
  color: #000;
  border-radius: 8px;
  width: 100%;
  height: 340px;
  padding: 32px 32px 32px 32px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.2);
  position: relative;
  @media (max-width: 1024px) {
    padding: 32px 32px 32px 32px;
  }
  @media (max-width: 768px) {
    height: auto;
    min-height: 340px;
    padding: 24px 16px 24px 16px;
    overflow-y: auto;
  }
`;

const CloseMenuIcon = styled.div`
  position: absolute;
  top: 32px;
  right: 32px;
  font-size: 32px;
  color: #000;
  cursor: pointer;
  z-index: 10;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CategorySectionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding: 0;
  @media (max-width: 1024px) {
    padding: 0 32px;
  }
  @media (max-width: 768px) {
    padding: 0 16px;
  }
  & > section {
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
    justify-content: center;
    gap: 32px;
  }
  @media (max-width: 768px) {
    & > section {
      flex-direction: column !important;
      gap: 24px !important;
      align-items: center;
      width: 100%;
      max-width: 400px;
    }
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    & > section {
      flex-direction: row !important;
      gap: 32px !important;
      align-items: center;
      width: 100%;
      max-width: 700px;
    }
  }
`;

const Navbar = () => {
  const navLinks = [
    { name: "HOME", link: "/" },
    { name: "HEADPHONES", link: "/headphones" },
    { name: "SPEAKERS", link: "/speakers" },
    { name: "EARPHONES", link: "/earphones" },
  ];
  const { cart, itemCount, total, increment, decrement, removeAll } = useCart();
  const [cartOpen, setCartOpen] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const router = useRouter();

  const getCartImage = (image) => {
    if (typeof image === "string") return image.replace("./", "/");
    if (image.desktop) return image.desktop.replace("./", "/");
    return "/assets/shared/desktop/image-category-thumbnail-headphones.png";
  };

  React.useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [menuOpen]);

  return (
    <Container>
      <ContentContainer>
        <HamburgerIcon onClick={() => setMenuOpen(true)}>
          <Image
            src="/assets/shared/tablet/icon-hamburger.svg"
            alt="menu"
            width={24}
            height={24}
            style={{ width: 24, height: 24 }}
            priority
          />
        </HamburgerIcon>
        <Image
          src="/assets/shared/desktop/logo.svg"
          width={143}
          height={25}
          alt="logo"
          style={{ marginLeft: 24, marginRight: 24 }}
        />
        <NavLinks>
          {navLinks.map((nav) => (
            <Link key={nav.name} href={nav.link} passHref legacyBehavior>
              <NavLink as="a">{nav.name}</NavLink>
            </Link>
          ))}
        </NavLinks>
        <CartIcon
          style={{ position: "relative" }}
          onClick={() => setCartOpen(true)}
        >
          <Image
            src="/assets/shared/desktop/icon-cart.svg"
            width={23}
            height={20}
            alt="cart"
          />
          {itemCount > 0 && (
            <span
              style={{
                position: "absolute",
                top: -8,
                right: -8,
                background: "#d87d4a",
                color: "#fff",
                borderRadius: "50%",
                fontSize: 12,
                width: 20,
                height: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                border: "2px solid #141414",
              }}
            >
              {itemCount}
            </span>
          )}
        </CartIcon>
        {menuOpen && (
          <MobileMenuOverlay onClick={() => setMenuOpen(false)}>
            <MobileMenuPanel onClick={(e) => e.stopPropagation()}>
              <CloseMenuIcon onClick={() => setMenuOpen(false)}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="5"
                    y1="5"
                    x2="19"
                    y2="19"
                    stroke="#000"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <line
                    x1="19"
                    y1="5"
                    x2="5"
                    y2="19"
                    stroke="#000"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </CloseMenuIcon>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <CategorySectionWrapper>
                  <CategorySection />
                </CategorySectionWrapper>
              </div>
            </MobileMenuPanel>
          </MobileMenuOverlay>
        )}
        {cartOpen && (
          <CartModalOverlay onClick={() => setCartOpen(false)}>
            <CartModal onClick={(e) => e.stopPropagation()}>
              <CartHeader>
                <CartTitle>CART ({itemCount})</CartTitle>
                <RemoveAll onClick={removeAll}>Remove all</RemoveAll>
              </CartHeader>
              <CartList>
                {cart.length === 0 ? (
                  <div style={{ color: "#7d7d7d", textAlign: "center" }}>
                    Your cart is empty.
                  </div>
                ) : (
                  cart.map((item) => (
                    <CartItem key={item.id}>
                      <CartItemImage
                        src={getCartImage(item.image)}
                        alt={item.name}
                      />
                      <CartItemInfo>
                        <CartItemName>
                          {item.name.split(" ")[0].toUpperCase()}{" "}
                          {item.name.match(/\bMK\s?II\b/i) ? "MK II" : ""}
                        </CartItemName>
                        <CartItemPrice>
                          $ {item.price.toLocaleString()}
                        </CartItemPrice>
                      </CartItemInfo>
                      <CartItemQty>
                        <button onClick={() => decrement(item.id)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => increment(item.id)}>+</button>
                      </CartItemQty>
                    </CartItem>
                  ))
                )}
              </CartList>
              <CartTotalRow>
                <CartTotalLabel>TOTAL</CartTotalLabel>
                <CartTotalValue>$ {total.toLocaleString()}</CartTotalValue>
              </CartTotalRow>
              <CheckoutButton
                onClick={() => {
                  setCartOpen(false);
                  router.push("/checkout");
                }}
              >
                CHECKOUT
              </CheckoutButton>
            </CartModal>
          </CartModalOverlay>
        )}
      </ContentContainer>
    </Container>
  );
};

export default Navbar;
