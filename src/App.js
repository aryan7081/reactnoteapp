import { useState } from "react";
import { nanoid } from 'nanoid'
import NotesList from "./Components/NotesList";
import Search from "./Components/Search";



const App = () => {
  let date = new Date().toLocaleDateString();

  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    text: "This is my first Note",
    date: `${date}`
  },
    {
    id: nanoid(),
    text: "This is my second Note",
    date: `${date}`
  },
    {
    id: nanoid(),
    text: "This is my third Note",
    date: `${date}`
  }
]);

const [searchText, setSearchText] = useState('')

const addNote = (text) => {
  const date = new Date();
  const newNote = {
    id:nanoid(),
    text:text,
    date:date.toLocaleDateString()
  }
  const newNotes = [...notes, newNote]
  setNotes(newNotes)
  
};
const deleteNote = (id) => {
  const newNotes = notes.filter((note) => note.id !== id);
  setNotes(newNotes)
}
  return <div className="container">
    <Search handleSearchNote = {setSearchText}/>
    <NotesList
     notes = {notes.filter((note) => note.text.toLowerCase().includes(searchText))} 
     handleAddNote = {addNote}
    handleDeleteNote = {deleteNote}/>
  </div>
}

export default App;



