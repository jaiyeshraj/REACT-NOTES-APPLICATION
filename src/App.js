import { useEffect, useState} from 'react'
import { nanoid } from 'nanoid'
import Noteslist from "./components/Noteslist";
import Search from './components/Search';
import Header from './components/Header';

const App = () => {
	const [notes, setNotes] = useState([])
	const [searchText, setSearchText] = useState('')
	useEffect(()=>{
		const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'))
		if(savedNotes)
		{
			setNotes(savedNotes)
		}
	},[])
	const addNote = (text) => {
		const date = new Date()
		const newNote = {
			id:nanoid(),
			text:text,
			date:date.toLocaleDateString()
		}
		const newNotes = [...notes,newNote]
		setNotes(newNotes)
	}
	const deleteNote = (id) => {
		const newNotes = notes.filter((note)=> note.id !== id)
		setNotes(newNotes)
	}
	const [darkMode, setDarkMode] = useState(false)
	return(
		<div className={`${darkMode && 'dark-mode'}`}>
			<div className='container'>
				<Header toggleMode={setDarkMode} />
				<Search handleSearchNote={setSearchText} />
				<Noteslist notes={notes.filter((note)=> note.text.toLowerCase().includes(searchText))} handleSave={addNote} handleDelete={deleteNote} />
			</div>
		</div>
	)
}
export default App;