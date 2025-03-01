export interface Theme {
  colors: {
    black: string;
    white: string;
    button: string;
    bgDark: string;
    bgLight: string;
  };
  fontSize: {
    xl: string;
    lg: string;
    md: string;
    base: string;
    sm: string;
  };
  flexSet: (just?: string, align?: string) => string;
  flexColumnSet: (just?: string, align?: string) => string;
}
