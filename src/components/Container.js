import styled from "styled-components";

export default function Container({ children, ...props }) {
  return <ContainerWrapper {...props}>{children}</ContainerWrapper>;
}

const ContainerWrapper = styled.section`
  width: 100%;
  max-width: 1110px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0 24px;
  }

  @media (max-width: 480px) {
    padding: 0 16px;
  }
`;
