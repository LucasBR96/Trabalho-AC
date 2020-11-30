// Import and configure the Firebase SDK
// These scripts are made available when the app is served or deployed on Firebase Hosting
// If you do not serve/host your project using Firebase Hosting see https://firebase.google.com/docs/web/setup
// importScripts('/__/firebase/8.0.0/firebase-app.js');
// importScripts('/__/firebase/8.0.0/firebase-messaging.js');
// importScripts('/__/firebase/init.js');

// const messaging = firebase.messaging();


 importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js');
 importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-messaging.js');
 // Initialize the Firebase app in the service worker by passing in
 // your app's Firebase config object.
 // https://firebase.google.com/docs/web/setup#config-object
 firebase.initializeApp({
  apiKey: "AIzaSyBluBgb53MjEZV5tCB16HlUyIQUQGGbfvw",
  authDomain: "vago-3f654.firebaseapp.com",
  databaseURL: "https://vago-3f654.firebaseio.com",
  projectId: "vago-3f654",
  storageBucket: "vago-3f654.appspot.com",
  messagingSenderId: "869792446902",
  appId: "1:869792446902:web:4899abe6eca3b41806e917"
});
 // Retrieve an instance of Firebase Messaging so that it can handle background
 // messages.
 const messaging = firebase.messaging();
 // [END initialize_firebase_in_sw]


// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// [START on_background_message]
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/logo512.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
