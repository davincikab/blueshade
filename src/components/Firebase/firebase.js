import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDixEY5MYN8K7DzQX-hAI6QxrcOBNcoIT0",
    authDomain: "blueshade-b8b40.firebaseapp.com",
    projectId: "blueshade-b8b40",
    storageBucket: "blueshade-b8b40.appspot.com",
    messagingSenderId: "554451246098",
    appId: "1:554451246098:web:29e76afcfc5b40dfe58ccb",
    measurementId: "G-J2394FRC3R"
};

class Firebase {
    constructor() {

        app.initializeApp(firebaseConfig);

        /* Firebase APIs */

        this.db = app.database();
        this.auth = app.auth();

        //
    }

    // authentication 
    doCreateUserWithEmailAndPassword = (email, password) => 
    this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    doSendEmailVerification = () =>
    this.auth.currentUser.sendEmailVerification({
      url: process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT,
    });

    doSignOut = () => this.auth.signOut();

    // get data
    getPlots = () => this.db.ref("plots");
    getPlot = (plot_id) => this.db.ref(`plots/${plot_id}`);

    getProperty = () => this.db.ref("property");
    getProperty = (property_id) => this.db.ref(`plots/${property_id}`);

    getTenants = () => this.db.ref("tenants");
    getTenant = (tenant_id) => this.db.ref(`tenants/${tenant_id}`);

}

export default Firebase;