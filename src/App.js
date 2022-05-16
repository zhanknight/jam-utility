import './App.css';
import Checkboxes from './Checkboxes';
import Resultbox from './Resultbox';


function App() {
  return (
    <div className="App">
      <h2 className="App-title">Jam Utility: Filter Scales by Notes. </h2>
    <div className="App-toolbar">
    <div className="App-selectorbar"> User selects notes to filter by here.<br />
    <Checkboxes />
    </div> 
    </div>
    <div className="App-results">
    <Resultbox />
    <Resultbox />
    <Resultbox />
    <Resultbox />
    <Resultbox />
    <Resultbox />
    </div>
    </div>
  );
}

export default App;

// implement checkbox functionality next
// checked items filter the separate scales array and then map those to resultboxes in the results div


