import Note from "./Note";
import AddNote from "./AddNote";

const NotesList = ({ notes, handleAddNote, handleDeleteNote}) => {
    
    return (
        <>
        <div className="notes-top">
            <AddNote handleAddNote = {handleAddNote}/>
        </div>
    <div className="notes-list">
        
        {notes.map((note) => (
        <Note id = {note.id} text = {note.text} date = {note.date}
        handleDeleteNote = {handleDeleteNote}/>))}
        
        
    </div>
    </>
    );
};

export default NotesList;