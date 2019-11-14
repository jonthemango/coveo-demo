import React, {useState} from 'react';
import {Checkbox, FormControlLabel, Button, Typography, Divider, makeStyles} from '@material-ui/core';
import {serializeToString} from '../algorithms/filters';

const useStyles = makeStyles(theme => ({
    title: {
        marginTop: "1em",
    }
}));

/**
 * This component is used to generate a list of checkboxes used for facets.
 * Given the type of the facet eg. "tpcategorie", 'tpcouleur", etc and a list of facets [{value:string}] and a label
 * this component uses the facetType to aid in serializing the "state" to a query string 
 * (current was not able to get query strings to work properly ) with the api
 * facetList is used for listing each checkbox
 * @param {label, facetType, facetList} props 
 */
export function FilterCheckbox(props){
    const classes = useStyles();
    let [state, setState] = useState({}) // check box state, each filter gets it's own key in this object, mapped to either true or false, starts undefined though since empty
    let [max, setMax] = useState(5); // max amount checkboxes to display


    const handleChange = (filterItem) => {

        setState(s => {
            if (filterItem in state) s[filterItem] = !s[filterItem] // if defined already then not it
            else s[filterItem] = true; // else it was undefined (falsy) therefore make it true
            console.log(s)
            console.log(serializeToString(props.facetType, s))
            return {...s} // clone and set the state
        })
    }

    return <>
            <Typography className={classes.title}>{props.label}</Typography>
            {
                props.facetList.map((facet, index) => { // filterItem is the string values in the filters arrays
                    if (index > max) return <></>
                    return <FormControlLabel
                                key={index + facet.value}
                                control={<Checkbox onChange={_ => handleChange(facet.value)} value={facet.value} checked={state[facet.value] === undefined ? false : state[facet.value]} />}
                                label={facet.value}/>
                        
                })
            }
            <div>
            {max > 5 ? <Button color="secondary" style={{textTransform: "capitalize"}} onClick={_ => setMax(max - 5)}>See Less</Button> : null }
            {props.facetList.length > max ? <Button color="secondary" style={{textTransform: "capitalize"}} onClick={_ => setMax(max + 5)}>See more</Button> : null }
            </div>
            <Divider/>
        </>

}