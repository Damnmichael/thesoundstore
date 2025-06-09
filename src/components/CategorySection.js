import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "HEADPHONES",
    image: "/assets/shared/desktop/image-category-thumbnail-headphones.png",
    link: "/headphones",
  },
  {
    name: "SPEAKERS",
    image: "/assets/shared/desktop/image-category-thumbnail-speakers.png",
    link: "/speakers",
  },
  {
    name: "EARPHONES",
    image: "/assets/shared/desktop/image-category-thumbnail-earphones.png",
    link: "/earphones",
  },
];

export default function CategorySection() {
  return (
    <Section>
      {categories.map((cat) => (
        <CategoryCard key={cat.name}>
          <ImageWrapper>
            <Image
              src={cat.image}
              alt={cat.name}
              width={160}
              height={160}
              style={{ objectFit: "contain" }}
            />
          </ImageWrapper>
          <CategoryTitle>{cat.name}</CategoryTitle>
          <Link href={cat.link} passHref legacyBehavior>
            <ShopLink>
              SHOP
              <ArrowIcon>
                <Image
                  src="/assets/shared/desktop/icon-arrow-right.svg"
                  alt="arrow"
                  width={8}
                  height={12}
                />
              </ArrowIcon>
            </ShopLink>
          </Link>
        </CategoryCard>
      ))}
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  justify-content: center;
  gap: 32px;
  /* margin: 80px 0 0 0; */
`;

const CategoryCard = styled.div`
  background: #f1f1f1;
  border-radius: 8px;
  width: 350px;
  height: 204px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  position: relative;

  @media (max-width: 768px) {
    width: 223px;
  }
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  width: 123px;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CategoryTitle = styled.h2`
  margin-top: 36px;
  font-size: 18px;
  letter-spacing: 1.2px;
  font-weight: bold;
  text-align: center;
  color: #000000;
`;

const ShopLink = styled.a`
  margin: 15px 0 32px 0;
  color: #7d7d7d;
  font-size: 13px;
  letter-spacing: 1px;
  font-weight: 700;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: color 0.2s;
  cursor: pointer;
  &:hover {
    color: #d87d4a;
    svg,
    img {
      filter: brightness(0) saturate(100%) invert(54%) sepia(62%) saturate(749%)
        hue-rotate(338deg) brightness(99%) contrast(92%);
    }
  }
`;

const ArrowIcon = styled.span`
  display: flex;
  align-items: center;
  margin-left: 8px;
`;
