import React, { useState } from 'react';
import './App.css';

function App() {
    const [notes, setNotes] = useState([
        {
            title: 'Segunda',
            items: [
                { title: 'Estudar ingles', marked: false },
                { title: 'Jogar', marked: false }
            ]
        },
        {
            title: 'Terça',
            items: [
                { title: 'Estudar ingles', marked: false },
                { title: 'Arrumar cama', marked: false }
            ]
        }
    ]);

    const [newNoteTitle, setNewNoteTitle] = useState('');

    const [selectedNote, setSelectedNote] = useState(null);

    function checkNote(e, note, item) {
        var allNotes = [...notes];
        allNotes[note].items[item].marked = e.target.checked;
        setNotes(allNotes);
    }

    function addNote(e) {
        e.preventDefault();

        setNotes(
            [
                {
                    title: newNoteTitle,
                    items: []
                },
                ...notes
            ]
        );

        setNewNoteTitle('');
    }

    return (
        <div className="app">
            <header className="header">
                <h1>To Do List</h1>
            </header>
            <div className="sidebar">
                <form onSubmit={(e) => addNote(e)}>
                    <input
                        className="addnote"
                        placeholder="Digite o titulo da nota"
                        type="text"
                        value={newNoteTitle}
                        onChange={(e) => setNewNoteTitle(e.target.value)}
                    />
                </form>
                <ul>
                    {notes.map((note, index) => (
                        <li className="note" key={index} onClick={() => setSelectedNote(index)}>
                            <h2>{note.title}</h2>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="main">
                <div className="mainnote">
                    <h1>{notes[selectedNote]?.title}</h1>
                    <ul>
                        {notes[selectedNote]?.items.map((item, index) => (
                            <li className="item" key={index}>
                                <input
                                    name="marked"
                                    type="checkbox"
                                    checked={item.marked}
                                    onChange={(e) => checkNote(e, selectedNote, index)}
                                />
                                <h3>{item.title}</h3>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default App;
