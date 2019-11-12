import React from 'react'
import {Result} from './Result';
import {Grid, makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      width: '90%',
      margin: "0 auto",
      marginTop: "7em",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    textField : {
        width: "100%",
    },
    results: {
        display: "flex",
        flexWrap: "wrap"
    }
  }));
  
export function ResultsPage(props){
    const classes = useStyles();
    return <div className={classes.root} >
           <Grid container spacing={3}>
           <Grid item xs={12} className={classes.results}>
                {props.results.map(result => {
                        return <Result key={result.uniqueId} result={result}/>
                })}
            </Grid>
            </Grid>
        </div>       
}