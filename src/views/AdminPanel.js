import React, { Component } from 'react';
import styled from 'styled-components';
import { adminLogOut } from 'store/actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

// Assets & components
import Admins from 'components/adminComponents/Admins';
import Categories from 'components/adminComponents/Categories';
import Products from 'components/adminComponents/Products';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const StyledMenuWrapper = styled.div`
  width: 200px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0;
`;

const StyledMenu = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0;
`;

const StyledDataWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px;
`;

class AdminPanel extends Component {
  pages = {
    categories: Categories,
    products: Products,
    admins: Admins,
  };

  state = {
    displayData: this.pages.categories,
  };

  changePage = (event) => {
    const nextPage = event.target.className;
    this.setState({ displayData: this.pages[nextPage] });
  };

  render() {
    const { adminLogOut, adminToken } = this.props;
    const { displayData } = this.state;

    return adminToken ? (
      <StyledWrapper>
        <StyledMenuWrapper>
          <h2>LOGO</h2>
          <StyledMenu onClick={this.changePage}>
            <span className="categories">Categories</span>
            <span className="products">Products</span>
            <span className="admins">Admins</span>
          </StyledMenu>
          <p onClick={adminLogOut}>log out</p>
        </StyledMenuWrapper>
        <StyledDataWrapper>
          {displayData === Categories && <Categories />}
          {displayData === Products && <Products />}
          {displayData === Admins && <Admins />}
        </StyledDataWrapper>
      </StyledWrapper>
    ) : (
      <Redirect to="admin/login" />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    adminToken: state.adminToken,
  };
};

const mapDispatchToProps = (dispatch) => ({
  adminLogOut: () => dispatch(adminLogOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminPanel);
