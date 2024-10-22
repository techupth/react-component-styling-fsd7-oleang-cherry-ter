// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import errorIcon from "/src/assets/error-circle.svg";
import warningIcon from "/src/assets/alert-triangle.svg";
import infoIcon from "/src/assets/alert-circle.svg";
import successIcon from "/src/assets/check-circle.svg";
function Alert({ type }) {
  let icon;
  let backgroundColor;
  if (type === "error") {
    icon = errorIcon;
    backgroundColor = "#F9C8C8";
  } else if (type === "warning") {
    icon = warningIcon;
    backgroundColor = "#F9D9C8";
  } else if (type === "info") {
    icon = infoIcon;
    backgroundColor = "#F9EBC8";
  } else {
    icon = successIcon;
    backgroundColor = "#CEF7CD";
  }

  const buttonStyles = css`
    width: 650px;
    height: 76px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    color: #444444;
    font-weight: 700;
    background-color: ${backgroundColor};
  `;

  return (
    <button css={buttonStyles}>
      <img src={icon} />
      This is {type} alert box
    </button>
  );
}
export default Alert;
