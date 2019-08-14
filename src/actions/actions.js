export const addFeature = feature => {
  console.log('addFeature invoked', feature);
  return {
    type: 'ADD_FEATURE',
    payload: feature
  }
}

export const removeFeature = feature => {
  console.log('remove feature invoked');
  return {
    type: 'REMOVE_FEATURE',
    payload: feature
  }
};
