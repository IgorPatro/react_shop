import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { getCategories, addCategory } from 'store/actions';
import { connect } from 'react-redux';

const Categories = ({ getCategories, addCategory, categories, adminToken }) => {
  useEffect(() => {
    getCategories();
    // eslint-disable-next-line
  }, []);

  const categoryRef = React.createRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    addCategory(adminToken, categoryRef.current.value);
    // getCategories();
  };

  return (
    <>
      <ul>
        {categories.map((category) => (
          <li key={category._id}>{category.name}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="new category" ref={categoryRef} />
        <input type="submit" value="Add category" />
      </form>
    </>
  );
};

Categories.propTypes = {
  getCategories: PropTypes.func.isRequired,
  categories: PropTypes.array,
};

Categories.defaultProps = {
  categories: [],
};

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    adminToken: state.adminToken,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getCategories: () => dispatch(getCategories()),
  addCategory: (adminToken, categoryName) => dispatch(addCategory(adminToken, categoryName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
