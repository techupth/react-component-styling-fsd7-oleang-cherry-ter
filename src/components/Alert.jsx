// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Error, Warning, Info, Success } from "../assets/icon";

function Alert() {
  const alerts = [
    { status: "Error", text: "This is error alert box", color: "red" },
    { status: "Warning", text: "This is warning alert box", color: "orange" },
    { status: "Info", text: "This is Info alert box", color: "yellow" },
    { status: "Success", text: "This is success alert box", color: "green" },
  ];
  const iconComponents = {
    Error: Error,
    Warning: Warning,
    Info: Info,
    Success: Success,
  };

  return (
    <>
      {alerts.map((item, index) => {
        const IconComponent = iconComponents[item.status];
        return (
          <div
            key={index}
            css={css`
              display: flex;
              flex-direction: column;
              align-items: flex-start;
            `}
          >
            <div
              css={css`
                display: flex;
                background-color: ${item.color};
                padding: 10px;
                border-radius: 5px;
                width: 200px;
                margin-top: 10px;
                align-items: center; /* Align icon and text in the same row */
                color: black;
              `}
            >
              <IconComponent />
              <span>{item.text}</span>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Alert;
