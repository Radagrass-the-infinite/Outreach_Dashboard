import firebase from 'firebase'
import {curriculum_details} from "@/components/curriculum/CurriculumData";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDQyPCfmtUkQ70XPzcByeu51fdlI_r-5dA",
    authDomain: "outreach-dash.firebaseapp.com",
    projectId: "outreach-dash",
    storageBucket: "outreach-dash.appspot.com",
    messagingSenderId: "1060044447635",
    appId: "1:1060044447635:web:37e25768831d7533871266",
    measurementId: "G-6ETTDL48LL"
};

// init firebase
firebase.initializeApp(firebaseConfig)


const myProjectAuth = firebase.auth()
const dataBase = firebase.firestore()

function getCollection(collection, targetArray) {
    dataBase.collection(collection).onSnapshot(res => {

        const changes = res.docChanges()
        changes.forEach(change => {
            if (change.type === 'added') {
                targetArray.push({
                    ...change.doc.data(),
                    id: change.doc.id, //custom id generated by firebase
                })
                console.log("Change in Data")
            }
        })
    })
}

export {myProjectAuth, dataBase, getCollection}