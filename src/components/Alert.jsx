/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import iconsmile from "../assets/icon-smile.svg";
import alerttriangle from "../assets/alert-triangle.svg";
import checkcircle from "../assets/check-circle.svg";
import alartcircle from "../assets/alert-circle.svg";

export function Alert(props) {
  if (props.type === "default") {
    return (
      <div>
        <h3
          css={css`
            width: 650px;
            height: 76px;
            border-radius: 10px;
            background: #f9c8c8;
            display: flex;
            flex-direction: flex-start;
            align-items: center;
            color: #444;
            margin-top: 50px;
          `}
        >
          <img
            src={iconsmile}
            alt="icon-smile"
            css={css`
              padding: 0 15px 0 20px;
            `}
          />
          {props.childen}
        </h3>
      </div>
    );
  } else if (props.type === "hover") {
    return (
      <div>
        <h3
          css={css`
            width: 650px;
            height: 76px;
            border-radius: 10px;
            background: #f9d9c8;
            display: flex;
            flex-direction: flex-start;
            align-items: center;
            color: #444;
          `}
        >
          <img
            src={alerttriangle}
            alt="icon-smile"
            css={css`
              padding: 0 15px 0 20px;
            `}
          />
          {props.childen}
        </h3>
      </div>
    );
  } else if (props.type === "error") {
    return (
      <div>
        <h3
          css={css`
            width: 650px;
            height: 76px;
            border-radius: 10px;
            background: #f9ebc8;
            display: flex;
            flex-direction: flex-start;
            align-items: center;
            color: #444;
          `}
        >
          <img
            src={alartcircle}
            alt="icon-smile"
            css={css`
              padding: 0 15px 0 20px;
            `}
          />
          {props.childen}
        </h3>
      </div>
    );
  } else if (props.type === "focus") {
    return (
      <div>
        <h3
          css={css`
            width: 650px;
            height: 76px;
            border-radius: 10px;
            background: #cef7cd;
            display: flex;
            flex-direction: flex-start;
            align-items: center;
            color: #444;
          `}
        >
          <img
            src={checkcircle}
            alt="icon-smile"
            css={css`
              padding: 0 15px 0 20px;
            `}
          />
          {props.childen}
        </h3>
      </div>
    );
  }
}
