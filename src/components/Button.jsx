// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Button({ type }) {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      `}
    >
      {type === "primary" ? (
        <button
          css={css`
            padding-left: 60px;
            background-color: #074ee8;
            font-size: 24px;
            border-radius: 4px;
            color: white;
            &:hover {
              color: black;
            }
          `}
        >
          Primary button
        </button>
      ) : (
        <button
          css={css`
            padding-left: 30px;
            background-color: #07a4e8;
            font-size: 24px;
            border-radius: 4px;
            color: white;
            &:hover {
              color: black;
            }
          `}
        >
          Secondary button
        </button>
      )}
    </div>
  );
}

export default Button;
