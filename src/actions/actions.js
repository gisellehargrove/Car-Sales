export const buyItem = () => {
  console.log('buyItem invoked');
}

export const removeFeature = () => {
  console.log('remove feature invoked');
  return { type: 'REMOVE_FEATURE' }
};
