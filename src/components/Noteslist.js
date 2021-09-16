import { useEffect } from 'react'
import Addnote from "./Addnote"
import Note from "./Note"

const Noteslist = ({notes,handleSave,handleDelete}) => {
    useEffect(()=>{
		localStorage.setItem('react-notes-app-data',JSON.stringify(notes))
	},[notes])
    return(
        <div className="notes-list">
            {
                notes.map((note)=> <Note id={note.id} text={note.text} date={note.date} handleDelete={handleDelete} />)
            }
            <Addnote handleSave={handleSave} />
        </div>
    )
}
export default Noteslist