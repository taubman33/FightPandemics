import React from "react";
import { Button } from "antd-mobile";
import styled from "styled-components";

import { theme, mq } from "../../constants/theme";

const SubmitButton = ({ title, handleClick, ...props }) => {
  const StyledButton = styled(Button).attrs((props) => {
    return {
      type: "primary",
    };
  })`
    ${theme.button.submit}
    margin: auto;
    width: 50%;
    @media only screen and ${mq.tablet.narrow.max} {
      width: 100%;
    }
  `;
  return (
    <StyledButton onClick={handleClick} {...props}>
      {title}
    </StyledButton>
  );
};

export default SubmitButton;
