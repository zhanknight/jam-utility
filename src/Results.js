import Resultbox from "./Resultbox";
import Grid from '@mui/material/Grid';


function Results(props) {

    return (
        <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 8 }}>
                {props.data.map(data => {
                    return (
                        <Grid item xs={4} sm={4} md={4}>
                        
                        <Resultbox key={data.id} data={data} />
                      
                        </Grid>
                    )
                }) }
        </Grid> 
    )
}

export default Results;


