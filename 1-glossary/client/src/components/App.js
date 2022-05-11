import React from 'react';
import Add from './Add.js';
import Search from './Search.js';
import GlossaryList from './GlossaryList.js';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
    };
    this.retrieveEntries = this.retrieveEntries.bind(this);
  }

  retrieveEntries() {
    // set GET request for all data
    // set new state for entries
    axios.get('/entries')
    .then((result) => {
      console.log('gets');
      this.setState({
        entries: result.data,
      })
    })
    .catch((err) => {
      console.log('ERR', err);
    })};



  addEntry(word, def) {
    // send POST request with {word: word, def: def}
    axios.post('/entries', {word, def})
    .then((res) => {
      this.retrieveEntries();
    })
  }

  searchEntries(term) {
    // send GET request for data that matches term
    // set new state for entries
    axios.get(`/entries?${term}`)
    .then((res) => {

    })
  }

  editEntry(word, def) {
    // send PUT request
    axios.put(`/entries/${word}`, {word, def})
    .then((res) => {
      this.retrieveEntries();
    })
  }

  deleteEntry(word) {
    // send DELETE request with word
    axios.delete(`/entries/${word}`)
    .then((res) => {
      this.retrieveEntries();
    })
  }

  // componentDidMount() {
  //   this.retrieveEntries();
  // }

  render() {
    return (
      <div>
        <h1>Glossary</h1>
        <Add addEntry={this.addEntry.bind(this)}/>
        <Search searchEntries={this.searchEntries.bind(this)}/>
        <GlossaryList entries={this.state.entries} editEntry={this.editEntry.bind(this)} deleteEntry={this.deleteEntry.bind(this)}/>
      </div>
    )
  }
}

export default App;