import React from 'react';
import CardNote from './CardNote';

function NoteList({ notes, archivedNotes, onDelete, onArchive }) {
  return (
    <div className="list">
      <p>Regular Notes</p>

      <div className="notes-list">
        {notes?.map((note) => (
          <CardNote
            key={note.id}
            id={note.id}
            title={note.title}
            body={note.body}
            createdAt={note.createdAt}
            isarchivedState={note.archived}
            onDelete={onDelete}
            onArchive={onArchive}
          />
        ))}
      </div>
      <p>Archived Notes</p>

      <div className="notes-list">
        {archivedNotes?.map((archivedNote) => (
          <CardNote
            key={archivedNote.id}
            id={archivedNote.id}
            title={archivedNote.title}
            body={archivedNote.body}
            createdAt={archivedNote.createdAt}
            isarchivedState={archivedNote.archived}
            onDelete={onDelete}
            onArchive={onArchive}
          />
        ))}
      </div>
      {notes.length === 0 && archivedNotes.length === 0 && (
        <h1>No notes found</h1>
      )}
    </div>
  );
}

export default NoteList;
