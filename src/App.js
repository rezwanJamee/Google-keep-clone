import React, { useState }  from 'react';
import './App.css';

import Header from './components/Header';
import CreateArea from './components/CreateArea';
import Note from './components/Note';
import Count from './components/Count';
import Footer from './components/Footer';

function App() {
const [notes, setNotes ] = useState([])

  function addNote(newNote){
    setNotes(prevValue =>{
      return [...prevValue, newNote];
    });    
  }

  function deleteNote(id) {
    setNotes(prevValue => {
      return [...prevValue.filter((note, index) => index !== id)];
    }) 
  }

  return (
    <div className="App">
      <Header />
      <Count count={notes.length === 0? "Empty" : `Showing ${notes.length} notes.` } />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note 
        key={index} 
        id={index} 
        title={note.title} 
        content={note.content} 
        onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
