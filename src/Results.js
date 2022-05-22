import Resultbox from "./Resultbox";

function Results(props) {

    return (
        <div className="App-results">

                {props.data.map(data => {
                    return (
                        <Resultbox key={data.id} data={data} />
                    )
                }) }

        </div>  
    )
}

export default Results;



