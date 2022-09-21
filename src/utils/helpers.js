export const userData = values => {
  let formData = new FormData();
  Object.keys(values).forEach(key => {
    formData.append(key, values[key]);
  });
  return formData;
};
