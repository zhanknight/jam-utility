import './App.css';
import Checkboxes from './Checkboxes';
import Resultbox from './Resultbox';


function App() {
  return (
    <div className="App">
      <h2 className="App-title">Jam Utility: Filter Scales by Notes. </h2>
    <div className="App-container">
    <div className="App-selectorbar"> User selects notes to filter by here.<br />
    <Checkboxes />
    </div> 
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



