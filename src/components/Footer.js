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
          Audiophile is an all in one stop to fulfill your audio needs.
          We&apos;re a small team of music lovers and sound specialists who are
          devoted to helping you get the most out of personal audio. Come and
          visit our demo facility - we&apos;re open 7 days a week.
        </FooterDescription>
        <FooterBottomRow>
          <Copyright>Copyright 2021. All Rights Reserved</Copyright>
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
        </FooterBottomRow>
      </FooterContent>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  width: 100%;
  background: #101010;
  color: #fff;
  padding: 75px 0 40px 0;
  display: flex;
  justify-content: center;
  margin-top: 200px;
`;

const FooterContent = styled.div`
  width: 1110px;
  display: flex;
  flex-direction: column;
  gap: 36px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 24px;
    gap: 32px;
  }
`;

const FooterTopRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
  }
`;

const Logo = styled.div``;

const FooterDescription = styled.p`
  font-size: 15px;
  color: #fff;
  opacity: 0.5;
  max-width: 410px;

  @media (max-width: 768px) {
    max-width: 100%;

    margin: 0 auto;
    padding: 0 0 24px 0;
  }
`;

const Copyright = styled.p`
  font-size: 14px;
  color: #fff;
  opacity: 0.5;
`;

const FooterNav = styled.nav`
  display: flex;
  gap: 32px;

  @media (max-width: 768px) {
    margin-top: 24px;
    gap: 24px;
    width: 100%;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
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

  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

const FooterBottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: row;
    width: 100%;
    margin-top: 24px;
  }
`;
