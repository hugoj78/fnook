import axios from 'axios'

export const DISPLAY_VILLAGERS = 'DISPLAY_VILLAGERS'

export const DISPLAY_FISHS = 'DISPLAY_FISHS'

export const displayVillagers = villagers => ({
  type: DISPLAY_VILLAGERS,
  payload: villagers
})

export const getVillagers = () => dispatch => {
  axios({
    method: 'get',
    url: 'https://api.nookipedia.com/villagers',
    params: {
      game: 'NH'
    },
    headers: {
      'X-API-KEY': process.env.REACT_APP_NOOKIPEDIA_KEY
    }
  })
    .then(res => {
      //    console.log(res)
      dispatch(displayVillagers(res.data))
    })
    .catch(err => err)
}

export const displayFishs = fish => ({
  type: DISPLAY_FISHS,
  payload: fish
})

export const getFishs = () => dispatch => {
  axios({
    method: 'get',
    url: 'https://api.nookipedia.com/nh/fish',
    headers: {
      'X-API-KEY': process.env.REACT_APP_NOOKIPEDIA_KEY
    }
  })
    .then(res => {
      //    console.log(res)
      dispatch(displayFishs(res.data))
    })
    .catch(err => err)
}
