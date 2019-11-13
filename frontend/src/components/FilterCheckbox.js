import React, {useState} from 'react';
import {Checkbox, FormControlLabel, Button, Typography, Divider, makeStyles} from '@material-ui/core';
import {serializeToString} from '../algorithms/filters';
import { Search } from '../algorithms/api';

const useStyles = makeStyles(theme => ({
    title: {
        marginTop: "1em",
    }
}));

export function FilterCheckbox(props){
    const classes = useStyles();
    let [state, setState] = useState({})
    let [max, setMax] = useState(5);


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