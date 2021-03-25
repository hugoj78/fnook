export const INCREMENT_USER = 'INCREMENT_USER'
export const SWAP_THEME = 'SWAP_THEME'

export const incrementUser = value => ({
  type: INCREMENT_USER,
  value: value
})

export const deleteUser = () => dispatch => {
  dispatch(incrementUser(''))
}

export const changeTheme = () => ({
  type: SWAP_THEME
})
