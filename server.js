const express = require('express');
const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');
// Make sure the path here is correctly pointing to your firebaseConfig.js file
const firebaseConfig = require('./firebase/firebaseConfig');

const app = express();
const port = 3000;

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

// Serve static files from the 'public' directory
app.use(express.static('public'));


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
