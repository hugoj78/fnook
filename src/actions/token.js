import axios from 'axios'
import { swapIsLoading } from './loading'

export const GET_TOKEN = 'GET_TOKEN'

export const deleteToken = () => dispatch => {
  dispatch(displayToken(''))
}

export const displayToken = payload => ({
  type: GET_TOKEN,
  payload
})

export const getToken = formState => dispatch => {
  axios({
    method: 'post',
    url: 'https://easy-login-api.herokuapp.com/users/login',
    data: {
      username: formState.username,
      password: formState.password
    }
  })
    .then(res => {
      dispatch(displayToken(res.headers['x-access-token']))
      dispatch(swapIsLoading())
    })
    .catch(err => console.log(err))
}
