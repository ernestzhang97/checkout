import React from 'react';

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      def: '',
    }
  }

  typingWord (e) {
    this.setState({word: e.target.value});
  }

  typingDefinition (e) {
    this.setState({def: e.target.value});
  }

  handleSumit(e) {
    e.preventDefault();
    props.addEntry(this.state.word, this.state.def);
  }

  render() {
    return (
      <div>
        <h3>Add new entry</h3>
        <form>
          <div>
            <label htmlFor="word">Word </label>
            <input type="text" name="word" required onChange={this.typingWord.bind(this)}></input>
          </div>
          <div>
            <label htmlFor="def">Definition </label>
            <input type="text" name="def" required onChange={this.typingDefinition.bind(this)}></input>
          </div>
          <div>
            <input type="submit" value="Add" onSubmit={this.handleSumit.bind(this)}></input>
          </div>
        </form>
      </div>
    )
  }
}

export default Add;