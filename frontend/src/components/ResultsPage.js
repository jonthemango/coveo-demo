import React from 'react'
import {Result} from './Result';
import {Grid, makeStyles, CardContent, Card, CircularProgress, Button, ButtonGroup} from '@material-ui/core'

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
    },
    page: {
      width: "5em"
    },
    bold: {
      fontWeight: "bold",
    }
  }));
  
/**
 * This component is in charge of displaying a list of results passed as props.
 * It also displays the current page number and when that page number is re-set 
 * queries the api through props.query.
 * @param {page, results, query, setPage} props 
 */
export function ResultsPage(props){
    const classes = useStyles();

    const setPage = (pageNo) => {
      // when setting the page, set the page number then re-quer 
      props.setPage(pageNo);
      props.query();
    }

    return <div className={classes.root} >
           <Grid container spacing={3}>
             <Grid item xs={12}>
               <Card>
                 <CardContent>
                  <ButtonGroup color="secondary" aria-label="outlined primary button group">
                    {props.page ? <Button onClick={_ => setPage(props.page-1)}>Prev</Button> : null}
                    <Button className={classes.bold}>{props.page+1}</Button>
                    <Button onClick={_ => setPage(1+props.page)}>{props.page+2}</Button>
                    <Button onClick={_ => setPage(2+props.page)}>{props.page+3}</Button>
                    <Button onClick={_ => setPage(3+props.page)}>{props.page+4}</Button>
                    <Button onClick={_ => setPage(4+props.page)}>{props.page+5}</Button>
                    <Button onClick={_ => setPage(1+props.page)}>Next</Button>
                  </ButtonGroup>
                 </CardContent>
               </Card>
             </Grid>
           {
           !props.loading ? // if !loading then display the results
            <Grid item xs={12} className={classes.results}>
                  {props.results.map(result => {
                          return <Result className="coveo-results" key={result.uniqueId} result={result}/>
                  })}
              </Grid> : // else display loading symbol
            <div style={{width: "100%", display: "flex", justifyContent: "center", marginTop: "10em"}}><CircularProgress  color="secondary" /></div>
            }
            </Grid>
        </div>       
}