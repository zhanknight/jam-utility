import Resultbox from "./Resultbox";

function Results(props) {

if (props.data.length === 0) {
    return (
        <div className="App-results">
            <div className="App-noresult"> 
             <h3 className="major">Not Found</h3>
                <h4>Uh oh!</h4>
                No scales found that include all of the selected notes.   
            </div>
        </div>  
        )
} else {
    return (
        <div className="App-results">
                {props.data.map(data => {
                    return (
                        <Resultbox key={data.id} data={data} />
                    )
                }) }
        </div>  
    )}
}

export default Results;



