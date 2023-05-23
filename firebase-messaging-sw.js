
'use strict';
 
importScripts("https://www.gstatic.com/firebasejs/8.2.4/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.4/firebase-messaging.js");
 
const FIREBASE_CONFIG = {
	apiKey: "AIzaSyDiN_GdYYuYMHZuTpQXyDf5YF08q4TEHhc",
	authDomain: "ezabawy-4872e.firebaseapp.com",
	projectId: "ezabawy-4872e",
	storageBucket: "ezabawy-4872e.appspot.com",
	messagingSenderId: "374590549745",
	appId: "1:374590549745:web:ffe65fb5b024e700f58350",
	measurementId: "G-6PL6ES3BVD"
};
 
// Initialize the firebase in the service worker.
firebase.initializeApp(FIREBASE_CONFIG);
 
self.addEventListener('push', function (event) {
	var data = event.data.json();
 
	const title = data.Title;
	data.Data.actions = data.Actions;
	const options = {
		body: data.Message,
		data: data.Data
	};
	event.waitUntil(self.registration.showNotification(title, options));
});
 
self.addEventListener('notificationclick', function (event) {});
 
self.addEventListener('notificationclose', function (event) {});
