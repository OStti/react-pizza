import React from 'react';
import PropTypes from 'prop-types';

const CheckboxGroup = ({ items, groupName, register }) => {
	return (
		<div className="checkbox-group">
			{items.map(({ id, label, value }) => {
				return (
					<div key={id} className="checkbox-group__item">
						<label htmlFor={value}>{label}</label>
						<input
							id={value}
							type="checkbox"
							value={value}
							ref={register}
							name={groupName}
						/>
					</div>
				);
			})}
		</div>
	);
};

CheckboxGroup.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object).isRequired,
	groupName: PropTypes.string.isRequired,
	register: PropTypes.func.isRequired,
};

export default CheckboxGroup;
