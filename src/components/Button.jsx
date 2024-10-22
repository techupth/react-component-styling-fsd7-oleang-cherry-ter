// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
function Button({ type }) {
  const buttonStyles = css`
  width: 171.19px;
  height: 50px;
    color: white;
    background-color: ${type === "primary" ? "#074EE8" : "#07A4E8"};
  `;
  return <button css={buttonStyles}>Button</button>;
}
export default Button;
