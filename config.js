import firebase from "firebase"

 var firebaseConfig = {
    apiKey: "AIzaSyCoMvt4UDUTvxDp2xgg0aIX2E1VNMBL9vU",
    authDomain: "attend-app-b5d21.firebaseapp.com",
    projectId: "attend-app-b5d21",
    storageBucket: "attend-app-b5d21.appspot.com",
    messagingSenderId: "763402009879",
    appId: "1:763402009879:web:a95caf78dda0017c01cb52"
  };

  firebase.initializeApp(firebaseConfig)


export default firebase.database()