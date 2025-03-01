import styled from 'styled-components';

import { HoverStyle } from '@styles/hover';

export const UserSection = styled.section`
  padding: 120px 80px 110px;
`;

export const UserHeader = styled.header`
  width: 750px;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-family: Exo2;
  line-height: 1.5;
  letter-spacing: -0.72px;
  text-align: left;
  margin-bottom: 70px;
`;

export const UserList = styled.div`
  ${({ theme }) => theme.flexSet('space-between')};

  & > div {
    width: 493px;
    height: 352px;

    & > img {
      width: 108px;
      margin-bottom: 40px;
      object-fit: contain;
    }

    & > p {
      text-align: left;
    }

    & > p:nth-child(2) {
      font-size: ${({ theme }) => theme.fontSize.lg};
      font-weight: bold;
      margin: 40px 0 24px;
    }

    & > p:nth-child(3) {
      font-size: ${({ theme }) => theme.fontSize.md};
      line-height: 1.67;
      opacity: 0.8;
      margin: 24px 0;
    }

    & > button {
      font-family: Exo2;
      font-size: ${({ theme }) => theme.fontSize.md};
      font-weight: bold;
      color: ${({ theme }) => theme.colors.button};
      margin-top: 24px;
      ${HoverStyle};
    }
  }
`;
