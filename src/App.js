import './App.css';
import Checkboxes from './Checkboxes';


function App() {
  return (
    <div className="App">
      <h2 className="App-title">Jam Utility: Filter Scales by Notes. </h2>
    <div className="App-container">
    <div className="App-selectorbar"> User selects notes to filter by here.<br />
    <Checkboxes />
    </div>  
    <div class="App-item"> Filtered results show up in here. </div>
    <div class="App-item"> .. and here. </div>
    <div class="App-item"> Here too! </div>
    <div class="App-item"> More filtered results. </div>
    <div class="App-item"> You get the idea. </div>
    <div class="App-item"> Resultssss. </div>
    </div>
    </div>
  );
}

export default App;



