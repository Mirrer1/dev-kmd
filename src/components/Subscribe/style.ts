import styled from 'styled-components';
import { motion } from 'framer-motion';

import { HoverStyle } from '@styles/hover';

export const SubscribeSection = styled(motion.section)<{ $image: string }>`
  height: 740px;
  background: ${({ $image }) => ($image ? `url(${$image}) center/cover no-repeat` : 'none')}, rgba(0, 0, 0, 0.5);
  padding: 152px 80px;
`;

export const SubscribeContent = styled.div`
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  margin-bottom: 95px;

  & > header {
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: bold;
    line-height: 1.5;
    letter-spacing: -0.36px;
    margin: 0 0 23px;
  }

  & > p {
    font-size: ${({ theme }) => theme.fontSize.md};
    line-height: 1.67;
    letter-spacing: -0.27px;
    opacity: 0.8;
  }

  & > hr {
    height: 1px;
    margin: 32px 0;
    opacity: 0.5;
  }

  & > p:last-of-type {
    font-size: ${({ theme }) => theme.fontSize.sm};
    line-height: 1.57;
    opacity: 0.6;
    margin-top: 32px;
  }
`;

export const SubscribeForm = styled.div<{ $error: null | boolean }>`
  ${({ theme }) => theme.flexColumnSet('center', 'center')};

  & > label {
    height: 19px;
    font-family: 'Exo 2';
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.base};
    font-weight: bold;
    line-height: normal;
    letter-spacing: -0.24px;
    margin: 0 146px 16px 150px;
  }

  & > form {
    position: relative;
    ${({ theme }) => theme.flexSet()};
    width: 500px;
    height: 50px;
    border-radius: 7px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    margin-top: 16px;
    padding: 4px 10px;
    transition: border-color 0.2s ease-in-out;
    border: solid 1px
      ${({ theme, $error }) =>
        $error === null ? theme.colors.white : $error ? theme.colors.warning : theme.colors.success};

    & > input {
      flex: 1;
      font-family: 'Exo 2';
      font-size: ${({ theme }) => theme.fontSize.base};
      background: transparent;
      border: none;
      outline: none;
      color: #fff;

      &::placeholder {
        color: #fff;
      }
    }

    & > button {
      background: transparent;
      opacity: ${props => (props.$error ? 0.5 : 1)};
      ${HoverStyle};
    }

    & > p {
      position: absolute;
      left: 15px;
      bottom: -30px;
      font-family: 'Exo 2';
      font-size: ${({ theme }) => theme.fontSize.base};
      color: ${({ theme }) => theme.colors.warning};
      opacity: ${props => (props.$error ? 1 : 0)};
      transition: opacity 0.2s ease-in-out;
    }
  }
`;
