import styled from 'styled-components';
import { motion } from 'framer-motion';

import { HoverStyle } from '@styles/hover';

export const PlacesSection = styled(motion.section)`
  padding: 120px 80px;

  & > header {
    font-family: 'Exo 2';
    font-size: ${({ theme }) => theme.fontSize.xl};
    line-height: 1.5;
    letter-spacing: -0.72px;
    margin-bottom: 60px;
  }
`;

export const FiltersWrapper = styled.div`
  ${({ theme }) => theme.flexSet()};
  margin-bottom: 68px;
`;

export const CategoryFilter = styled.div`
  width: 408px;
  height: 50px;
  ${({ theme }) => theme.flexSet('center', 'center')};
  gap: 5px;
  border-radius: 25px;
  border: solid 1px rgba(0, 0, 0, 0.5);
  margin-right: 20px;
`;

export const CategoryButton = styled.button<{ $selected: boolean }>`
  height: 40px;
  font-family: 'Exo 2';
  font-size: ${({ theme }) => theme.fontSize.base};
  letter-spacing: -0.24px;
  border-radius: 25px;
  background-color: ${({ $selected, theme }) => ($selected ? theme.colors.black : 'transparent')};
  color: ${({ $selected, theme }) => ($selected ? theme.colors.white : theme.colors.black)};
  ${({ $selected }) => !$selected && HoverStyle};
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &:nth-child(1),
  &:nth-child(2) {
    width: 64px;
  }

  &:nth-child(3),
  &:nth-child(4) {
    width: 81px;
  }

  &:nth-child(5) {
    width: 88px;
  }
`;

export const YearFilter = styled.div`
  width: 408px;
  height: 50px;
  ${({ theme }) => theme.flexSet('center', 'center')};
  border-radius: 25px;
  border: solid 1px rgba(0, 0, 0, 0.5);
`;

export const YearButton = styled.div<{ $selectedBtn: boolean; $selectedLine: boolean }>`
  & > button {
    position: relative;
    width: 40px;
    height: 40px;
    font-family: 'Exo 2';
    font-size: ${({ theme }) => theme.fontSize.sm};
    letter-spacing: -0.21px;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ $selectedBtn, theme }) => ($selectedBtn ? theme.colors.black : theme.colors.bgDark)};
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    border-radius: 25px;

    &:hover {
      background-color: ${({ theme }) => theme.colors.black};
    }
  }

  & > span {
    display: inline-block;
    width: 90px;
    height: 8px;
    margin: 0 -5px;
    background-color: ${({ $selectedLine, theme }) => ($selectedLine ? theme.colors.black : theme.colors.bgDark)};
    transition: background-color 0.2s ease-in-out;
  }
`;

export const PlacesList = styled.div`
  ${({ theme }) => theme.flexSet()};
  gap: 40px;

  & > div {
    width: 100%;
    ${({ theme }) => theme.flexSet('center')};
  }
`;

export const PlaceCard = styled(motion.article)`
  width: 400px;
  height: 415px;
  padding: 15px 20px 23px;
  border-radius: 10px;
  background-color: rgba(217, 217, 217, 0.5);

  & > div {
    ${({ theme }) => theme.flexSet('space-between')};
    font-size: ${({ theme }) => theme.fontSize.base};

    & > p {
      font-weight: bold;
      letter-spacing: -0.24px;
    }

    & > span {
      letter-spacing: -0.24px;
    }
  }

  & > img {
    width: 360px;
    height: 227.1px;
    margin: 9px 0 19.9px;
    border-radius: 5px;
  }

  & > p {
    width: 357px;
    height: 101px;
    font-size: ${({ theme }) => theme.fontSize.sm};
    line-height: normal;
    letter-spacing: -0.21px;
    margin: 19.9px 0 0 3px;
  }
`;
