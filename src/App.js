import { useState } from 'react';
import './App.css';
import Checkboxes from './Checkboxes';
import Results from './Results';
import {scaleData} from './Scales.js'

function App() {

const [loadedScales, setLoadedScales] = useState(scaleData);
const [selectedNotes, setSelectedNotes] = useState(["A", "y", "z"])



const filteredScaleData = loadedScales.filter(stuff => {
return stuff.notes.includes(selectedNotes[0]);})

// this needs to look at each entry in selectedNotes,


  return (
    <div className="App">
    <h2 className="App-title">Jam Utility: Filter Scales by Notes. </h2>
    <div className="App-toolbar">
    <Checkboxes sSelectedNotes={setSelectedNotes}/>
    </div>
    <Results data={filteredScaleData} />

    {loadedScales.forEach(scale => {
     console.log(scale.root)
    })}
    {console.log(selectedNotes)}
    {console.log(loadedScales[0].notes)}
    </div>
  );
}

export default App;

