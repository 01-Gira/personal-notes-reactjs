import React from 'react';
import { createRoot } from 'react-dom/client';

// import style
import './styles/style.css';
import FormNote from './components/FormNote';
import { getInitialData } from './utils';
import NoteList from './components/NotesList';

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      archivedNotes: [],
      searchQuery: '',
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onAddNoteHandler({ title, body, date }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: Math.random().toString(36).substr(2, 9),
            title: title,
            body: body,
            createdAt: new Date().toISOString(),
            archived: false,
          },
        ],
      };
    });
  }

  onDeleteNoteHandler(id) {
    const { notes, archivedNotes } = this.state;

    const updatedNotes = notes.filter((note) => note.id !== id);

    if (updatedNotes.length !== notes.length) {
      this.setState({ notes: updatedNotes });
    } else {
      const updatedArchivedNotes = archivedNotes.filter(
        (note) => note.id !== id
      );
      if (updatedArchivedNotes.length !== archivedNotes.length) {
        this.setState({ archivedNotes: updatedArchivedNotes });
      }
    }
  }

  onArchiveNoteHandler(id) {
    const archivedNote = this.state.notes.find((note) => note.id === id);

    if (archivedNote) {
      // Set archived property to true for archived notes
      archivedNote.archived = true;

      this.setState((prevState) => {
        return {
          notes: prevState.notes.filter((note) => note.id !== id),
          archivedNotes: [...prevState.archivedNotes, archivedNote],
        };
      });
    }
  }

  onSearchHandler(event) {
    const query = event.target.value;
    this.setState({ searchQuery: query });

    if (query === '') {
      this.setState({ notes: getInitialData() });
      return;
    }

    const filteredNotes = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(query.toLowerCase())
    );

    this.setState({ notes: filteredNotes });
  }

  render() {
    return (
      <div className="note-app">
        <h1>Notes Application</h1>
        <h2>Add Note</h2>
        <FormNote addNote={this.onAddNoteHandler} />
        <h2>List Notes</h2>
        <div>
          <input
            type="text"
            placeholder="Search note..."
            value={this.state.searchQuery}
            onChange={this.onSearchHandler}
          />
        </div>
        <NoteList
          notes={this.state.notes}
          archivedNotes={this.state.archivedNotes}
          onDelete={this.onDeleteNoteHandler}
          onArchive={this.onArchiveNoteHandler}
        />
      </div>
    );
  }
}

const root = createRoot(document.getElementById('root'));
root.render(<NotesApp />);
