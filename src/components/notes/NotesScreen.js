import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { activeNote } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar'

export const NotesScreen = () => {

   const dispatch = useDispatch();

   const { active: note } = useSelector(state => state.notes);
   // console.log("note", note);
   const [formValues, handleInputChange, reset] = useForm(note);
   console.log("formValues", formValues);
   const { body, title } = formValues;

   const activeId = useRef(note.id);

   useEffect(() => {
      if (note.id !== activeId.current) {
         reset(note);
         activeId.current = note.id;
      }
   }, [note, reset])

   useEffect(() => {

      dispatch(activeNote(formValues.id, { ...formValues }));

   }, [formValues, dispatch])



   return (
      <div className='notes__main-content'>
         <NotesAppBar />
         <div className='notes__content'>
            <input
               type="text"
               placeholder="some awesome title"
               className='notes___title-input'
               autoComplete='off'
               name="title"
               value={title}
               onChange={handleInputChange}
            />
            <textarea
               placeholder="What happened today"
               className='notes_textarea'
               name="body"
               value={body}
               onChange={handleInputChange}
            >
            </textarea>
            {
               (note.url) &&
               (<div className='notes__image'>
                  <img
                     src="https://thumbs.dreamstime.com/z/april-baby-grogu-yoda-stands-colorful-toys-realistic-toy-blurred-background-high-quality-photo-216079590.jpg"
                     alt='imagen'
                  />
               </div>)
            }
         </div>
      </div>
   )
}
