import { MdDeleteForever } from 'react-icons/md'

const Note = ({id, text, date}) => {
    return <div className="note">
        <span>{text}</span>
        <div className="note-footer">
            <small>{date}</small>
            <MdDeleteForever className='delete-icon' size='1.3em' color='maroon'/>
        </div>
    </div>
};

export default Note;