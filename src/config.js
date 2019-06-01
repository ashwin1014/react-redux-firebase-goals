import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import firebaseui  from 'firebaseui';

const config = {
    apiKey: "AIzaSyARM5-1bABxl2dah73XI72-xutatCuVtgQ",
    authDomain: "goal-coach-1d896.firebaseapp.com",
    databaseURL: "https://goal-coach-1d896.firebaseio.com",
    projectId: "goal-coach-1d896",
    storageBucket: "goal-coach-1d896.appspot.com",
    messagingSenderId: "774174567641",
    appId: "1:774174567641:web:f2999b0031f95173"
};

// to use firebase default UI to Login
const uiConfig = ({
  signInSuccessUrl: '/',
  signInOptions: [
    {
      provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      recaptchaParameters: {
        type: 'image', // another option is 'audio'
        size: 'invisible', // other options are 'normal' or 'compact'
        badge: 'bottomright' // 'bottomright' or 'inline' applies to invisible.
      },
      defaultCountry: 'IN'
    }
  ],
  tosUrl: '/terms-of-service' // This doesn't exist yet
})

// inittialize firebase
export const firebaseApp = firebase.initializeApp(config);

const ui = new firebaseui.auth.AuthUI(firebase.auth());
export const startFirebaseUI = function (elementId) {
    ui.start(elementId, uiConfig)
}

// firebase database reference
export const goalRef = firebase.database().ref('goals');  
export const completeGoalRef = firebase.database().ref('completeGoals');