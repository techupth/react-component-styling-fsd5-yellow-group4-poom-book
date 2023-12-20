/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export function Button(props) {
  if (props.type === "primary-button") {
    return (
      <button
        css={css`
          background-color: #074ee8;
          width: 171.19px;
          height: 50px;
          boder-radius: 0px;
        `}
      >
        Large
      </button>
    );
  } else if (props.type === "secondary-button") {
    return (
      <button
        css={css`
          background-color: #07a4e8;
          width: 171.19px;
          height: 50px;
        `}
      >
        Large
      </button>
    );
  }
}
