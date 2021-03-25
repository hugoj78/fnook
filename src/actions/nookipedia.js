import axios from 'axios'

export const DISPLAY_VILLAGERS = 'DISPLAY_VILLAGERS'

export const displayVillagers = villagers => ({
  type: DISPLAY_VILLAGERS,
  payload: villagers
})

export const getVillagers = () => dispatch => {
  axios({
    method: 'get',
    url: 'https://api.nookipedia.com/villagers',
    params: {
      game: 'NH',
      offset: 2
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
