importScripts('https://www.gstatic.com/firebasejs/8.3.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.3.1/firebase-messaging.js')

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
