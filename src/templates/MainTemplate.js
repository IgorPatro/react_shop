import React from 'react';
import PropTypes from 'prop-types';
import { theme } from 'theme/theme';
import { ThemeProvider } from 'styled-components';

const MainTemplate = ({ children }) => (
  <>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
