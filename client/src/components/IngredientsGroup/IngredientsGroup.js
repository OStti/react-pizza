import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const IngredientsGroup = forwardRef(({ items, type }, ref) => {
  return (
    <div className="ingredients-group">
      {items.map(({ id, name, slug, category }) => {
        return (
          <div key={id} className="ingredients-group__item">
            <label htmlFor={slug}>
              {name}
              <input
                type={type}
                value={slug}
                name={category}
                ref={ref}
                id={slug}
              />
            </label>
          </div>
        );
      })}
    </div>
  );
});

IngredientsGroup.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  type: PropTypes.string.isRequired,
};

export default IngredientsGroup;
