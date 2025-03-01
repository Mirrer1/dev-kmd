import { css } from 'styled-components';

export const HoverStyle = css`
  @media (min-width: 992px) {
    transition: opacity 200ms ease-in-out;

    &:hover {
      opacity: 40%;
    }

    &:active {
      opacity: 100%;
    }
  }
`;

export const ReverseHoverStyle = css`
  @media (min-width: 992px) {
    transition: opacity 200ms ease-in-out;

    &:hover {
      opacity: 100%;
    }

    &:active {
      opacity: 40%;
    }
  }
`;
