"use client";

import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Link from "next/link";

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

const Navbar = () => {
  const navLinks = [
    { name: "HOME", link: "/" },
    { name: "HEADPHONES", link: "/headphones" },
    { name: "SPEAKERS", link: "/speakers" },
    { name: "EARPHONES", link: "/earphones" },
  ];

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
        <CartIcon>
          <Image
            src="/assets/shared/desktop/icon-cart.svg"
            width={23}
            height={20}
            alt="cart"
          />
        </CartIcon>
      </ContentContainer>
    </Container>
  );
};

export default Navbar;
