import React, { useState, createContext, useContext } from 'react';
import PropTypes from 'prop-types';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
	const [product, setProduct] = useState({});

	return (
		<ProductContext.Provider value={{ product, setProduct }}>
			{children}
		</ProductContext.Provider>
	);
};

ProductProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export const useProductContext = () => useContext(ProductContext);

export default ProductProvider;
