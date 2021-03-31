export const swapLoading = 'swapLoading'
export const setLoading = 'setLoading'

export const swapIsLoading = () => ({
  type: swapLoading
})

export const setIsLoading = payload => ({
  type: setLoading,
  payload
})
