import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

const firestore = admin.firestore();
exports.onStreamStatusChanged = functions.database.ref('/stream/{uid}').onUpdate((change, context) => {
      const eventStatus = change.after.val();

      const reservationRef = firestore.doc(`reservations/${context.params.uid}`);

      return change.after.ref.once('value').then(async (statusSnapshot) => {
        const status = statusSnapshot.val();
        console.log(status, eventStatus);

        if (status.last_changed > eventStatus.last_changed) return null;
        else if(status.state == "online") return null;

        let batch = firestore.batch();

        let connections = await reservationRef.collection("connections").get();

        if(connections.docs.length){
          for(let doc of connections.docs){
            let localIceCandidates = await reservationRef.collection("connections").doc(doc.id).collection("localIceCandidates").get();
            let remoteIceCandidates = await reservationRef.collection("connections").doc(doc.id).collection("remoteIceCandidates").get();
            for(let ice of localIceCandidates.docs){
              batch.delete(reservationRef.collection("connections").doc(doc.id).collection("localIceCandidates").doc(ice.id))
            }
            for(let ice of remoteIceCandidates.docs){
              batch.delete(reservationRef.collection("connections").doc(doc.id).collection("remoteIceCandidates").doc(ice.id))
            }
            batch.delete(reservationRef.collection("connections").doc(doc.id));
          }
        }
        return batch.commit();
      });
    });
