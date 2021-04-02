import firebase from 'firebase/app'
import 'firebase/messaging'

const firebaseConfig = {
  apiKey: 'AIzaSyDIYulRrKrOqf5fZZtI03L415s7NTLc36g',
  authDomain: 'fnook-11de8.firebaseapp.com',
  projectId: 'fnook-11de8',
  storageBucket: 'fnook-11de8.appspot.com',
  messagingSenderId: '751567159642',
  appId: '1:751567159642:web:4d09bb66c968352dbd7363'
}

firebase.initializeApp(firebaseConfig)

const messaging = firebase.messaging()

export const getToken = setTokenFound => {
  return messaging
    .getToken({
      vapidKey:
        'BECwGck8k6izbx66V7zFjVh6TsMjF-2C60oKI7csohBjPPP6wXIlV-OhCzdtBQxuaKNzfT2T13ZObr6igGNIru8'
    })
    .then(currentToken => {
      if (currentToken) {
        setTokenFound(true)
      } else {
        console.log(
          'No registration token available. Request permission to generate one.'
        )
        setTokenFound(false)
      }
    })
    .catch(err => {
      console.log('An error occurred while retrieving token. ', err)
    })
}

export const onMessageListener = () =>
  new Promise(resolve => {
    messaging.onMessage(payload => {
      resolve(payload)
    })
  })
