// App.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import NoteCreate from "./components/NoteCreate";
import Note2 from "./components/Note2";

import Box  from '@mui/material/Box';
import Header from './components/Header';

import { v4 as uuid } from 'uuid';

import './App.css'

const AppContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 20px;
align-items: center;
`;

const App = () => {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem('notes')) || []
  );

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (title, content, color) => {
    const newNote = {
      id: uuid(),
      title,
      content,
      color,
    };
    setNotes([newNote, ...notes]);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const editNote = (id, editedTitle, editedContent) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, title: editedTitle, content: editedContent } : note
    );
    setNotes(updatedNotes);
  };

  const editNoteColor = (id, newColor) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, color: newColor } : note
    );
    setNotes(updatedNotes);
  };

  return (
<Box>

<Header />
<NoteCreate onCreate={addNote} />
<AppContainer>
  {
  notes.map((note)=>(
         <Note2
    key={note.id}
    id={note.id}
    title={note.title}
    content={note.content}
    color={note.color}
    onDelete={deleteNote}
    onEdit={editNote}
    onColorChange={editNoteColor}
    />
  ))
} 
</AppContainer>
    
   
</Box>
    
  );
};

export default App;
