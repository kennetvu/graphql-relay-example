// 1. Import the extendTheme function
import { extendTheme, ThemeConfig } from '@chakra-ui/react';

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
};
export const theme = extendTheme({ colors, config });
