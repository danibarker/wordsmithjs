import styled from "styled-components";

export const Button = styled.button`
  background: #8C45F7;
  color: white;
  font-size: 20px;
  border-radius: 15px;
  padding: 5px;
  width: ${(props) => (props.big ? "200px" : "100px")};
  height: ${(props) => (props.big ? "100px" : "unset")};
  transition: background-color 0.4s linear;
  box-shadow:  2px 2px 1px #7C35e7;
  border: none;
  &:hover {
    background: #5C25d7;
  }
`;
