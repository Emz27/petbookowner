// initialize firebase
try {
firebase.initializeApp({
  apiKey: "AIzaSyCHUtKxC3ywtoHHj1QVuZVG6FliyR-u4pw",
  authDomain: "petbook-d35a1.firebaseapp.com",
  databaseURL: "https://petbook-d35a1.firebaseio.com",
  projectId: "petbook-d35a1",
  storageBucket: "petbook-d35a1.appspot.com",
  messagingSenderId: "397515456686"
})
} catch (err) {
    // we skip the "already exists" message which is
    // not an actual error when we're hot-reloading
    if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)
    }
}
var db = firebase.firestore();



db.settings({
  timestampsInSnapshots: true
});
