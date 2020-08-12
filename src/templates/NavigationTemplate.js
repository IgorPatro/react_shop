import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Assets & components
import Navigation from 'components/Navigation';

const StyledHomeWrapper = styled.div`
  width: 100%;
`;

const NavigationTemplate = ({ children }) => (
  <>
    <Navigation />
    <StyledHomeWrapper>{children}</StyledHomeWrapper>
  </>
);

NavigationTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default NavigationTemplate;
