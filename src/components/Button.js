import styled from "styled-components";

const Button = styled.button`
  width: 160px;
  height: 48px;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${(props) => {
    switch (props.variant) {
      case "primary":
        return `
          background-color: #D87D4A;
          color: white;
          &:hover {
            background-color: #FBAF85;
          }
        `;
      case "secondary":
        return `
          background-color: #000000;
          color: white;
          &:hover {
            background-color: #4C4C4C;
          }
        `;
      case "tertiary":
        return `
          background-color: transparent;
          color: #000000;
          border: 1px solid #000000;
          &:hover {
            background-color: #000000;
            color: white;
          }
        `;
      default:
        return `
          background-color: #D87D4A;
          color: white;
          &:hover {
            background-color: #FBAF85;
          }
        `;
    }
  }}
`;

export default Button;
