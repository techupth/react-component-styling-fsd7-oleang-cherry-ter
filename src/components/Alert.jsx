// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const alerts = [
  { status: "Default", color: "black" },
  { status: "Hover", color: "blue" },
  { status: "Error", color: "red" },
  { status: "Focus", color: "purple" },
];

function Alert() {
  return (
    <>
      {alerts.map((item, index) => (
        <div key={index} css={css`
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        `}>
          <h1>{item.status}</h1>
          <h2>Email Address</h2>
          <input
            type="email"
            placeholder="Enter email address here"
            css={css`
                border-color: ${item.color};
                padding-right: 80px;
                padding-top: 20px
                border-radius: 20px;
            `}
          />
          <h5>We'll never share your email.</h5>
          <h2>Username</h2>
          <input
            type="text"
            placeholder="Enter Username here"
            css={css`
                border-color: ${item.color};
                padding-right: 80px;
                padding-top: 20px
                border-radius: 20px;
            `}
          />
        </div>
      ))}
    </>
  );
}

export default Alert;

