export const INCREMENT_USER = 'INCREMENT_USER';

export const incrementUser = (value) => ({
  type: INCREMENT_USER,
  value: value,
});

export const deleteUser = () => (dispatch) => {
  dispatch(incrementUser(''));
};
