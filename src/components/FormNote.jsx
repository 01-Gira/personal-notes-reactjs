import React from 'react';
import { render } from 'react-dom';

class FormNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <form className="note-input" onSubmit={this.onSubmitEventHandler}>
        <input
          type="text"
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
          placeholder="Beri nama judul"
        />
        <textarea
          value={this.state.body}
          onChange={this.onBodyChangeEventHandler}
          cols="30"
          rows="10"
          placeholder="Tuliskan kegiatanmu hari ini"
        ></textarea>
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default FormNote;
