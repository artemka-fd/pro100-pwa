// plugins/firebase.js
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// import { getAnalytics } from "firebase/analytics";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  console.log(config.public)

  const firebaseConfig = {
    apiKey: config.public.firebaseApiKey,
    authDomain: config.public.firebaseAuthDomain,
    projectId: config.public.firebaseProjectId,
    storageBucket: config.public.firebaseStorageBucket,
    messagingSenderId: config.public.firebaseMessagingSenderId,
    appId: config.public.firebaseAppId,
    // measurementId: config.public.firebaseMeasurementId,
  };

  const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
  const auth = getAuth(app);
  auth.languageCode = 'ua';

  return {
    provide: {
      auth: auth,
    //   analytics: analytics
    }
  }
})