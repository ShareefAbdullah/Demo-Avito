import React from "react";
import PropTypes, { string } from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #011765;
  color: ${(props) => props.color};
  padding: 10px;
  width: ${(props) => props.width};
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

export const Button = (props) => {
  return <StyledButton {...props}>{props.text}</StyledButton>;
};

Button.propTypes = {
  text: PropTypes.string,
};
