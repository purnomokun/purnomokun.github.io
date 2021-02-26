//firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/8.2.9/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.9/firebase-messaging.js');
    // Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDJM8xbon9wZWtC2_qrMlSSjbR-0ZKqtGU",
  authDomain: "pushbkd-aacd9.firebaseapp.com",
  projectId: "pushbkd-aacd9",
  storageBucket: "pushbkd-aacd9.appspot.com",
  messagingSenderId: "622187287280",
  appId: "1:622187287280:web:63a85cf11e1e6afa8d6835"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const messaging = firebase.messaging();
  messaging.onBackgroundMessage(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
      body: 'Background Message body.',
      icon: '/firebase-logo.png'
    };
  
    self.registration.showNotification(notificationTitle,
      notificationOptions);
  });