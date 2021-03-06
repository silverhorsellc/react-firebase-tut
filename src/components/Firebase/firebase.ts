import * as app from 'firebase'
import 'firebase/auth'

// TODO - before having a production site available, modify this to have both a dev & prod instance in Firebase
// .env.development
// .enf.production
const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
}

class Firebase {
    public auth: any = null
    constructor () {
        app.initializeApp(config)
        this.auth = app.auth()
    }

    // ** AUTH API ** //
    doCreateUserWithEmailAndPassword = (email: string, password: string) => this.auth.createUserWithEmailAndPassword(email, password)

    doSignInWithEmailAndPassword = (email: string, password: string) => this.auth.signInWithEmailAndPassword(email, password)

    doSignOut = () => this.auth.signOut()

    doPasswordReset = (email: string) => this.auth.sendPasswordResetEmail(email)

    doPasswordUpdate = (password: string) => this.auth.currentUser.updatePassword(password)
}

export default Firebase
