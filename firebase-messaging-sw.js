// Lost Dogs Ayrshire website: shows Missing dog alerts when the website isn't open.
// Firebase shows the notification and opens the dog's page when it is tapped.
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js', 'https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js');
firebase.initializeApp({
  apiKey: "AIzaSyBvsSYYymjt0h9v9cynw2_oophP0BNG0I8", authDomain: "lost-dogs-ayrshire.firebaseapp.com", projectId: "lost-dogs-ayrshire",
  storageBucket: "lost-dogs-ayrshire.firebasestorage.app", messagingSenderId: "302116971454", appId: "1:302116971454:web:e336d94d271ee433410fef"
});
firebase.messaging();
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
