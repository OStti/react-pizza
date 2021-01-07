export const getStringValue = (obj, watchField, field = 'name') => {
  return obj.find(({ slug }) => slug === watchField)[field];
};

export const getArrayValues = (obj, watchField, field = 'name') => {
  return (
    watchField.length !== 0 &&
    watchField
      .map((item) => obj.find(({ slug }) => slug === item)[field])
      .join(', ')
  );
};
