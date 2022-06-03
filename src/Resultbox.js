import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';



function Resultbox(props) {

    return (
        // just show me everything in the object right now
        <Card variant="outlined">
            <CardHeader title={props.data.scale}>
             </CardHeader>
             <h3 className={props.data.type}>{props.data.scale}</h3>
       <h4>Notes in the scale:</h4>
   
                {props.data.notes.map(data => {
                    return (
                        `${data}   `
                    )
                }) }
             
        </Card>
    )
}

export default Resultbox;


