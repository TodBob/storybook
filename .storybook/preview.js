import ThemeProvider from 'styles/ThemeProvider';
import { LightTheme } from 'baseui';


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={LightTheme}>
        <Story />
    </ThemeProvider>
  ),
];
