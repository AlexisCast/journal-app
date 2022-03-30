import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase-config"



export const loadNotes = async (uid) => {
   const dataRef = await getDocs(collection(db, `${uid}/journal/notes`));
   // console.log("dataRef", dataRef);

   const notes = [];

   dataRef.forEach((dataRefchild) => {
      // console.log("d", d.data());
      notes.push({
         id: dataRefchild.id,
         ...dataRefchild.data()
      })
   });
   // console.log("notes", notes);
   return notes;
}
