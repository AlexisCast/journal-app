import React from 'react'

export const JournalEntry = () => {
   return (
      <div className="journal__entry pointer">
         <div
            className="journal__entry-picture"
            style={{
               backgroundSize: 'cover',
               backgroundImage: 'url(https://thumbs.dreamstime.com/z/april-baby-grogu-yoda-stands-colorful-toys-realistic-toy-blurred-background-high-quality-photo-216079590.jpg)'
            }}
         ></div>
         <div className="journal__entry-body">
            <p className="journal__entry-title">
               A new day
            </p>
            <p className="journal__entry-content">
               Dolore eiusmod voluptate minim fugiat.
            </p>
         </div>
         <div className="journal__entry-date-box">
            <span>Monday</span>
            <h4>28</h4>
         </div>
      </div>
   )
}
