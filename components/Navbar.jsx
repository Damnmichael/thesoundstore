"use client";

import Image from "next/image";
import React from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import { useCart } from "../src/context/CartContext";

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
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 34px;
  list-style: none;
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

const Navbar = () => {
  const navLinks = [
    { name: "HOME", link: "/" },
    { name: "HEADPHONES", link: "/headphones" },
    { name: "SPEAKERS", link: "/speakers" },
    { name: "EARPHONES", link: "/earphones" },
  ];
  const { cart, itemCount, total, increment, decrement, removeAll } = useCart();
  const [cartOpen, setCartOpen] = React.useState(false);

  const getCartImage = (image) => {
    if (typeof image === "string") return image.replace("./", "/");
    if (image.desktop) return image.desktop.replace("./", "/");
    return "/assets/shared/desktop/image-category-thumbnail-headphones.png";
  };

  return (
    <Container>
      <ContentContainer>
        <Image
          src="/assets/shared/desktop/logo.svg"
          width={143}
          height={25}
          alt="logo"
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
              <CheckoutButton>CHECKOUT</CheckoutButton>
            </CartModal>
          </CartModalOverlay>
        )}
      </ContentContainer>
    </Container>
  );
};

export default Navbar;
