import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { adminAuthenticate } from 'store/actions';
import { connect } from 'react-redux';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 5px;
`;

const AdminLogin = ({ adminAuthenticate }) => {
  const adminLoginRef = React.createRef();
  const adminPasswordRef = React.createRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    adminAuthenticate(adminLoginRef.current.value, adminPasswordRef.current.value);
  };

  return (
    <StyledWrapper>
      <StyledForm onSubmit={handleSubmit}>
        <input type="text" placeholder="login" name="adminLogin" ref={adminLoginRef} />
        <input type="password" placeholder="hasło" name="adminPassword" ref={adminPasswordRef} />
        <input type="submit" value="Zaloguj się" />
      </StyledForm>
    </StyledWrapper>
  );
};

AdminLogin.propTypes = {
  adminAuthenticate: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  adminAuthenticate: (adminLogin, adminPassword) =>
    dispatch(adminAuthenticate(adminLogin, adminPassword)),
});

export default connect(null, mapDispatchToProps)(AdminLogin);
