import React from "react";
import PropTypes, { string } from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #011765;
  color: ${(props) => props.color};
  font-size: ${(props) => props.font || "auto"};
  text-align: ${(props) => props.align || "center"};
  padding: ${(props) => props.padding || "10px"};
  width: ${(props) => props.width};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = (props) => {
  return (
    <StyledButton {...props}>
      <img src={props.icon} alt="" />
      <span className="button-text">{props.text}</span>
    </StyledButton>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
};
