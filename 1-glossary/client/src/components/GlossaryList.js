import React from 'react';
import GlossaryListEntry from './GlossaryListEntry.js';

var GlossaryList = ({entries, editEntry, deleteEntry}) => {
  return (
    <div>
      {entries.map((entry) => <GlossaryListEntry entry={entry} editEntry={editEntry} deleteEntry={deleteEntry}/>)}
    </div>
  )
}

export default GlossaryList;