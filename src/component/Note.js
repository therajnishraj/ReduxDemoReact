import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote, getAllNotes, deleteNote, updateNote } from "../utils/action/NoteAction";

const Note = () => {
    const [note, setNote] = useState({ title: "", content: "" });
  const dispatch = useDispatch();
  const { notes, loading, error } = useSelector((state) => state.notesReducer);

  const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyYWpuaXNoIiwiZXhwIjoxNzM3NDcwMjc4LCJpYXQiOjE3Mzc0NTU4Nzh9.vcWu8UARERlR6CetNG43P4lj4IryJewBbYL5y02Jq2f3nz28onr7grXhxkwVIQ-Nv9r8ZKVqnjnvIfjmHTJMDA"; // Replace with actual token

  useEffect(() => {
    dispatch(getAllNotes(token)); // Load all notes on component mount
  }, [dispatch, token]);

  const handleAddNote = () => {
    dispatch(addNote(note, token));
    setNote({ title: "", content: "" }); // Clear input fields
  };

  const handleDeleteNote = (id) => {
    dispatch(deleteNote(id, token));
  };

  const handleUpdateNote = (id) => {
    const updatedNote = { title: "Updated", content: "Updated content" }; // Replace with actual data
    dispatch(updateNote(id, updatedNote, token));
  };
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <h1>Notes</h1>

      <input
        type="text"
        value={note.title}
        onChange={(e) => setNote({ ...note, title: e.target.value })}
        placeholder="Title"
      />
      <input
        type="text"
        value={note.content}
        onChange={(e) => setNote({ ...note, content: e.target.value })}
        placeholder="Content"
      />
      <button onClick={handleAddNote}>Add Note</button>

      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <button onClick={() => handleUpdateNote(note.id)}>Update</button>
            <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Note