//library
import React from "react";
//styles
import styled from "styled-components";

const StyledInput = styled.input`
  width: ${(props) => props.width || "75%"};
  margin: 0 auto;
  padding: 10px 15px;
  border: none;
  border-radius: 10px;
  background-color: grey;
  cursor: pointer;
  color: white;

  &::placeholder {
    color: white;
  }

  &:focus {
    outline: none;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

export const Input = ({ type = "text", placeholder, ...props }) => {
  return <StyledInput type={type} placeholder={placeholder} {...props} />;
};
