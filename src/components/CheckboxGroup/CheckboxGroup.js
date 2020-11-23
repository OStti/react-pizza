import React from 'react';
import PropTypes from 'prop-types';

const CheckboxGroup = ({ items, selectedItems, checkboxGroupHandler }) => {
	return (
		<div className="checkbox-group">
			{items.map(({ id, value }) => {
				return (
					<div key={id} className="checkbox-group__item">
						<label htmlFor={value}>{value}</label>
						<input
							type="checkbox"
							checked={
								selectedItems && selectedItems.includes(value)
							}
							value={value}
							onChange={checkboxGroupHandler}
							id={value}
						/>
					</div>
				);
			})}
		</div>
	);
};

CheckboxGroup.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object).isRequired,
	selectedItems: PropTypes.arrayOf(PropTypes.string).isRequired,
	checkboxGroupHandler: PropTypes.func.isRequired,
};

export default CheckboxGroup;
