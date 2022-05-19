import Resultbox from "./Resultbox";

function Results(props) {

    return (
        <div className="App-results">

                {props.data.map(data => {
                 
                    return (
                        <>
                        <Resultbox data={data} />
                        </>  
                    )
                    
                }) }

        </div>  
    )
}

export default Results;



