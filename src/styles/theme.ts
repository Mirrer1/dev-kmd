import { Theme } from './theme.d';

const theme: Theme = {
  colors: {
    black: '#000000',
    white: '#FFFFFF',
    button: '#18A0FB',
    bgDark: '#999999',
    bgLight: '#D9D9D9',
    success: '#00C300',
    warning: '#FF6633',
  },
  fontSize: {
    xl: '48px',
    lg: '24px',
    md: '18px',
    base: '16px',
    sm: '14px',
  },
  flexSet: (just = 'normal', align = 'normal') => {
    return `display: flex;
    justify-content: ${just};
    align-items: ${align};`;
  },
  flexColumnSet: (just = 'normal', align = 'normal') => {
    return `display: flex;
    flex-direction: column;
    justify-content: ${just};
    align-items: ${align};`;
  },
};

export default theme;
