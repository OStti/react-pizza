import React from 'react';
import PropTypes from 'prop-types';

const RadioGroup = ({ items, selectedItems, groupName, radioGroupHandler }) => {
	return (
		<div className="radio-group">
			{items.map(({ id, value }) => {
				return (
					<div key={id} className="radio-group__item">
						<label htmlFor={value}>{value}</label>
						<input
							type="radio"
							name={groupName}
							checked={
								selectedItems && selectedItems.includes(value)
							}
							value={value}
							onChange={radioGroupHandler}
							id={value}
						/>
					</div>
				);
			})}
		</div>
	);
};

RadioGroup.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object).isRequired,
	selectedItems: PropTypes.string.isRequired,
	groupName: PropTypes.string.isRequired,
	radioGroupHandler: PropTypes.func.isRequired,
};

export default RadioGroup;
