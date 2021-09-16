import { useState } from 'react'
const Addnote = ({handleSave}) => {
    const [noteText, setnoteText] = useState('')
    const characterLimit = 1000
    const handleChange = (event) => {
        if(characterLimit - event.target.value.length >=0)
        {
            setnoteText(event.target.value)
        }
    }
    const handleSubmit = () => {
        if(noteText.trim().length>0){
            handleSave(noteText)
            setnoteText('')
        }
    }
    return(
        <div className="note new">
            <textarea rows="8" cols="10" placeholder="Type your notes here" value={noteText} onChange={handleChange}></textarea>
            <div className="note-footer">
                <small>{characterLimit - noteText.length} remaining</small>
                <button className="save" onClick={handleSubmit}>Save</button>
            </div>
        </div>
    )   
}
export default Addnote