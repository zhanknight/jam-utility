import './App.css';
import Checkboxes from './Checkboxes';
import Results from './Results';


function App() {
  return (
    <div className="App">
    <h2 className="App-title">Jam Utility: Filter Scales by Notes. </h2>
    <div className="App-toolbar">
    <Checkboxes />
    </div>
    <Results />
    </div>
  );
}

export default App;

// implement checkbox functionality next
// checked items filter the separate scales array and then map those to resultboxes in the results div


