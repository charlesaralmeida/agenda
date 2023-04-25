import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import {
    getDatabase,
    connectDatabaseEmulator,
    ref,
    set,
} from 'firebase/database'

const firebaseConfig = {
    apiKey: 'AIzaSyB7_SjzUi30Ri5H9zOjmTa37ErpbO9mxyo',
    authDomain: 'agenda-de-transportes.firebaseapp.com',
    projectId: 'agenda-de-transportes',
    storageBucket: 'agenda-de-transportes.appspot.com',
    messagingSenderId: '423682393277',
    appId: '1:423682393277:web:26c9958ed7f0103f3de3d4',
    measurementId: 'G-0PWL0EYB30',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

const db = getDatabase()
if (window.location.hostname === 'localhost') {
    // Point to the RTDB emulator running on localhost.
    connectDatabaseEmulator(db, 'localhost', 9000)
}

const writeData = (path, data) => {
    return set(ref(db, path), data)
}

const Firebase = {
    writeData,
}

export default Firebase
