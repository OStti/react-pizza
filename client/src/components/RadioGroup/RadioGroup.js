import React from 'react';
import PropTypes from 'prop-types';

const RadioGroup = ({ items, groupName, register }) => {
	return (
		<div className="radio-group">
			{items.map(({ id, label, value }) => {
				return (
					<div key={id} className="radio-group__item">
						<label htmlFor={value}>{label}</label>
						<input
							id={value}
							type="radio"
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

RadioGroup.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object).isRequired,
	groupName: PropTypes.string.isRequired,
	register: PropTypes.func.isRequired,
};

export default RadioGroup;
