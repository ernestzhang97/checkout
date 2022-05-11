import React from 'react';

// var GlossaryListEntry = ({entry}) => {
//   return (
//     <div>
//       {entry.word} : {entry.def}
//       <button onClick={editEntry}>edit</button>
//       <button onClick={deleteEntry}>delete</button>
//     </div>
//   )
// }

class GlossaryListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: props.entry.word,
      def: props.entry.def,
    }
  }

  handleEdit() {
    props.editEntry(this.state.word, this.state.def);
  }

  handleDelete() {
    props.deleteEntry(this.state.word);
  }

  render() {
    return (
      <div>
        {this.state.word} : {this.state.def}
        <button onClick={this.handleEdit.bind(this)}>edit</button>
        <button onClick={this.handleDelete.bind(this)}>delete</button>
      </div>
    )
  }
}

export default GlossaryListEntry;