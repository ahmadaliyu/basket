import {StatusBar} from 'react-native';

import {Dimensions} from 'react-native';
export const {width, height} = Dimensions.get('window');

export const colors = {
  primary: 'orange',
  blue: 'blue',
  secondary: '#E61949',
  white: '#FFFFFF',
  black: '#000000',
  red: '#FF0000',
  lightRed: '#E61949',
  inactive: '#D1D1D1',
  stroke: '#E8E8E8',
  icons: '#292D32',
  inputBox: '#F3F7FF',
  header: '#121212',
  body: '#828282',
  placeholder: '#A0A0A0',
  dark: '#3A3A3A',
  borderBg: 'rgba(16, 40, 85, 0.15)',
  gray: '#bec3c9',
  orange: 'orange',
};
export const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
export const PASSWORD_REGEX = /[A-Z][a-z][0-9][#?!@$%^&*-]/;
export const fonts = {
  text: {
    largeText: 36,
    h1: 24,
    h2: 20,
    h3: 18,
    textRegular: 16,
    button: 16,
    smallText: 14,
    mediumText: 12,
    small: 10,
    xs: 9,
  },
};

const variant = {
  xxl4: 120,
  xxl3: 96,
  xxl2: 80,
  xxl1: 72,
  xxl: 56,
  xl: 40,
  lg: 32,
  md: 24,
  sm: 16,
  xs: 8,
  xxs: 4,
};
export const globalStyles = {
  wrapper: 20,
  statusbarHeight: StatusBar.currentHeight,
  radius: {
    lg: 20,
    md: 16,
    sm: 8,
    xmd: 10,
    xs: 4,
  },
  margin: variant,
  padding: variant,
};

export function containsSpecialCharacters(str: string) {
  // Regular expression to match any of the characters $, /, or -
  const regex = /[&.$/-]/;
  // Use test method to check if the string contains any of the characters
  return regex.test(str);
}
