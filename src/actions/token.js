export const INCREMENT_TOKEN = 'INCREMENT_TOKEN';

export const incrementToken = (value) => ({
  type: INCREMENT_TOKEN,
  value: value,
});

export const deleteToken = () => (dispatch) => {
  dispatch(incrementToken(''));
};
