import React from 'react';
import PropTypes, { string } from 'prop-types';

const ProductCategory = ({ title, children }) => {
	return (
		<div>
			<h2>{title}</h2>
			{children}
		</div>
	);
};

ProductCategory.propTypes = {
	title: string.isRequired,
	children: PropTypes.element.isRequired,
};

export default ProductCategory;
