import { MdDeleteForever } from 'react-icons/md'

const Note = ({id, text, date, handleDeleteNote}) => {
    return <div className="note">
        <span>{text}</span>
        <div className="note-footer">
            <small>{date}</small>
            <MdDeleteForever onClick={() => handleDeleteNote(id)} className='delete-icon hover:cursor-pointer' size='1.3em' color='maroon'/>
        </div>
    </div>
};

export default Note;