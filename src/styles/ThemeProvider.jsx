import PropTypes from 'prop-types';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { BaseProvider } from 'baseui';

const ThemeProvider = ({ theme, children }) => {
  const engine = new Styletron();

  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={theme}>
        {children}
      </BaseProvider>
    </StyletronProvider>
  );
};

export default ThemeProvider;

ThemeProvider.propTypes = {
  theme: PropTypes.object.isRequired,
};
