import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import LogoSVG from "../../public/assets/shared/desktop/logo.svg";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterTopRow>
          <Logo>
            <Image
              src={LogoSVG}
              alt="audiophile logo"
              width={143}
              height={25}
            />
          </Logo>
          <FooterNav>
            <FooterLink href="/">HOME</FooterLink>
            <FooterLink href="/headphones">HEADPHONES</FooterLink>
            <FooterLink href="/speakers">SPEAKERS</FooterLink>
            <FooterLink href="/earphones">EARPHONES</FooterLink>
          </FooterNav>
        </FooterTopRow>
        <FooterDescription>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we're open 7 days a week.
        </FooterDescription>
        <SocialIcons>
          <a href="#" aria-label="Facebook">
            <Image
              src="/assets/shared/desktop/icon-facebook.svg"
              alt="Facebook"
              width={24}
              height={24}
            />
          </a>
          <a href="#" aria-label="Twitter">
            <Image
              src="/assets/shared/desktop/icon-twitter.svg"
              alt="Twitter"
              width={24}
              height={24}
            />
          </a>
          <a href="#" aria-label="Instagram">
            <Image
              src="/assets/shared/desktop/icon-instagram.svg"
              alt="Instagram"
              width={24}
              height={24}
            />
          </a>
        </SocialIcons>
        <Copyright>Copyright 2021. All Rights Reserved</Copyright>
      </FooterContent>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  width: 100%;
  background: #101010;
  color: #fff;
  padding: 60px 0 40px 0;
  display: flex;
  justify-content: center;
`;

const FooterContent = styled.div`
  width: 1110px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const FooterTopRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Logo = styled.div`
  margin-bottom: 32px;
`;

const FooterDescription = styled.p`
  font-size: 15px;
  color: #fff;
  opacity: 0.5;
  max-width: 410px;
  margin: 32px 0 0 0;
`;

const Copyright = styled.p`
  font-size: 14px;
  color: #fff;
  opacity: 0.5;
`;

const FooterNav = styled.nav`
  display: flex;
  gap: 32px;
`;

const FooterLink = styled(Link)`
  color: #fff;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 2px;
  text-decoration: none;
  transition: color 0.2s;
  &:hover {
    color: #d87d4a;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 32px;
`;
