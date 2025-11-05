importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js')
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// // Initialize the Firebase app in the service worker by passing the generated config 

const firebaseConfig = {
  apiKey: "AIzaSyCobJzGV0llzPm7K4R9O5Z43oEYwqZ248U",
  authDomain: "newsapp-4d3bb.firebaseapp.com",
  projectId: "newsapp-4d3bb",
  storageBucket: "newsapp-4d3bb.firebasestorage.app",
  messagingSenderId: "449641566495",
  appId: "1:449641566495:web:9091c29a4c8c85514ba02a",
  measurementId: "G-49FV4JWT0E"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

firebase?.initializeApp(firebaseConfig)


// Retrieve firebase messaging
const messaging = firebase.messaging();

self.addEventListener('install', function (event) {
  // console.log('Hello world from the Service Worker :call_me_hand:');
});

// Handle background messages
self.addEventListener('push', function (event) {
  const payload = event.data.json();
  const notificationTitle = payload.notification.body;
  const notificationOptions = {
    body: payload.notification.body,
  };

  event.waitUntil(
    self.registration.showNotification(notificationTitle, notificationOptions)
  );
});