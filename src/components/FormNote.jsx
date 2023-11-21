import React from 'react';
import { render } from 'react-dom';

class FormNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      maxTitleLength: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const newTitle = event.target.value;

    // Check if the length of the new title is within the specified limit
    if (newTitle.length <= this.state.maxTitleLength) {
      this.setState({
        title: newTitle,
      });
    }
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
    // Reset the form after submission
    this.setState({
      title: '',
      body: '',
    });
  }

  render() {
    const remainingCharacters =
      this.state.maxTitleLength - this.state.title.length;
    return (
      <form className="note-input" onSubmit={this.onSubmitEventHandler}>
        <p>Sisa Karakter {remainingCharacters}</p>
        <input
          type="text"
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
          maxLength={this.state.maxTitleLength}
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
