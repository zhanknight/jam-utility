import { useState } from 'react';
import './App.css';
import NoteButtons from './NoteButtons';
import Results from './Results';
import {scaleData} from './Scales.js'

function App() {

const [loadedScales] = useState(scaleData);
const [selectedNotes, setSelectedNotes] = useState([])

// start with all scales 
let filteredScaleData = loadedScales;

// the filtering mechanism, iterates over the array of selected notes
// and filters down for each one
let count = 0;
selectedNotes.forEach(element => {
filteredScaleData = filteredScaleData.filter(stuff => {
  return stuff.notes.includes(selectedNotes[count]);
})
count = count +1;
});

// the app!
  return ( 
    <div className="App">
    <h1 className="App-title" data-testid="title">{'\u266A'} Jam Utility {'\u266A'}</h1>
    <div className="App-toolbar" data-testid="notebuttons">
    <NoteButtons setSelectedNotes={setSelectedNotes} selectedNotes={selectedNotes}/>
    </div>
    <Results data={filteredScaleData} />
    </div>
  );
}



export default App;

