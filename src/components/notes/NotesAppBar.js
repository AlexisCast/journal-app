import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote } from '../../actions/notes';

export const NotesAppBar = () => {

   const dispatch = useDispatch();
   const { active: note } = useSelector(state => state.notes);
   const handleSave = () => {
      // console.log("startSaveNote", note);
      dispatch(startSaveNote(note));
   }

   return (
      <div className='notes__appbar'>
         <span>28 of August 2020</span>
         <div>
            <button className='btn'>
               picture
            </button>
            <button
               className='btn'
               onClick={handleSave}
            >
               Save
            </button>
         </div>
      </div>
   )
}
