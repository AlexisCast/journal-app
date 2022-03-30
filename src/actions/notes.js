import { db } from '../firebase/firebase-config';
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { types } from '../types/types';
import { async } from '@firebase/util';
import { loadNotes } from '../helpers/loadNotes';
import Swal from 'sweetalert2';


export const startNewNote = () => {
   return async (dispatch, getState) => {
      const { uid } = getState().auth;
      console.log(uid);

      const newNote = {
         title: '',
         body: '',
         date: new Date().getTime()
      }

      const doc = await addDoc(collection(db, `${uid}`, "journal/notes"), newNote);
      console.log("Document written with ID: ", doc);

      dispatch(activeNote(doc.id, newNote));
   }
}

export const activeNote = (id, note) => ({
   type: types.notesActive,
   payload: {
      id,
      ...note
   }
})

export const startLoadingNotes = (uid) => {
   return async (dispatch) => {
      const notes = await loadNotes(uid);
      dispatch(setNotes(notes));
   }
}

export const setNotes = (notes) => ({
   type: types.notesLoad,
   payload: notes
})

export const startSaveNote = (note) => {
   return async (dispatch, getState) => {

      try {
         const { uid } = getState().auth

         if (!note.url) {
            delete note.url
         }

         const noteToFirestore = { ...note }
         delete noteToFirestore.id
         const noteRef = doc(db, `${uid}/journal/notes/${note.id}`)

         await updateDoc(noteRef, noteToFirestore)
            .then(() => {
               Swal.fire("Success", "Succesfully Updated", "success");
            })
      } catch (error) {
         console.log(error);
         Swal.fire("Error", error.code, "error");


      }

   }
}