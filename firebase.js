var firebaseConfig = {
    apiKey: "AIzaSyD6GeVZY_tHKBlfq0DPKdsYUTSrc1J_j2g",
    authDomain: "to-do-list-58cf3.firebaseapp.com",
    projectId: "to-do-list-58cf3",
    storageBucket: "to-do-list-58cf3.appspot.com",
    messagingSenderId: "172586903065",
    appId: "1:172586903065:web:185becf2e035c73076ac88",
    measurementId: "G-0YRESGKGTM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  var db = firebase.firestore();