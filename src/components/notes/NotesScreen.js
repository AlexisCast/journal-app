import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NotesScreen = () => {
   return (
      <div className='notes__main-content'>
         <NotesAppBar />
         <div className='notes__content'>
            <input
               type="text"
               placeholder="some awesome title"
               className='notes___title-input'
               autoComplete='off'
            />
            <textarea
               placeholder="What happened today"
               className='notes_textarea'
            >
            </textarea>
            <div className='notes__image'>
               <img
                  src="https://thumbs.dreamstime.com/z/april-baby-grogu-yoda-stands-colorful-toys-realistic-toy-blurred-background-high-quality-photo-216079590.jpg"
                  alt='imagen'
               />
            </div>
         </div>
      </div>
   )
}
