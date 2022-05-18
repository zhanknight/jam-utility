import './App.css';
import Checkboxes from './Checkboxes';
import Results from './Results';
import {scaleData} from './Scales.js'

const filteredScaleData = scaleData.filter(stuff => {
    return stuff.notes.includes('A');})

function App() {
  return (
    <div className="App">
    <h2 className="App-title">Jam Utility: Filter Scales by Notes. </h2>
    <div className="App-toolbar">
    <Checkboxes />
    </div>
    <Results data={filteredScaleData} />
    </div>
  );
}

export default App;

// implement checkbox functionality next
// checked items filter the separate scales array as filteredScaleData
// right now it's just hardcoded to filter for scales with note A

