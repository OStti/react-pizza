import React from 'react';
import PropTypes from 'prop-types';

const Category = ({ title, children }) => {
	return (
		<div className="food-category">
			<h2 className="food-category__title">{title}</h2>
			<div className="food-category__content">{children}</div>
		</div>
	);
};

Category.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};

export default Category;
