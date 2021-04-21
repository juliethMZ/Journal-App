import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className= "notes__main-content">
            
            <NotesAppBar />

            <div className ="notes__content">

                <input 
                type ="text"
                placeholder="write your ideas"
                className ="notes__title-input"
                autoComplete ="off"

                />

                <textarea
                placeholder= " what happened today"
                className ="notes__textarea"
                >
                </textarea>

                <div className= "notes__image">
                   <img 
                   src = "https://media.istockphoto.com/photos/astronaut-deep-space-image-science-fiction-fantasy-in-high-resolution-picture-id1153308175?k=6&m=1153308175&s=612x612&w=0&h=_DHjK_PgfSmezWxaJJZ8IRdOG59f_j-mKiC0vJxfdSs="
                   alt ="astronauta"
                   />
                </div>

            </div>
        </div>
    )
}
