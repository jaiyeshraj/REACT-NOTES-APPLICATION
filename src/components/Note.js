import {MdDeleteForever} from 'react-icons/md'
const Note = ({id,text,date,handleDelete}) => {
    return(
        <div className="notes">
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <MdDeleteForever className='delete-icon' size='1.5em' onClick={()=>handleDelete(id)} />
            </div>
        </div>
    )
}
export default Note