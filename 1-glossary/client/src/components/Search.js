import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    props.searchEntries(this.state.term);
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="searchText"></label>
          <input type="text" name="searchText"></input>
          <input type="submit" value="Search" onSubmit={this.handleSubmit.bind(this)}></input>
        </form>
      </div>
    )
  }
}

export default Search;