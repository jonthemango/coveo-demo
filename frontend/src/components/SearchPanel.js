import React, {useState, useEffect} from 'react'
import {AppBar, InputBase, Toolbar, Typography, Button, Card, Slider,CardContent, Paper, Divider, FormControlLabel, Checkbox, makeStyles} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import {FilterCheckbox} from './filtering/FilterCheckbox';
import JSONPretty from 'react-json-pretty';




const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginTop: "7em",
        marginLeft: "2em",
        position: "sticky",
        width: "100%",
    }, 
    card: {
    },
    title: {
        marginTop: "1em",
    }
}));



export function SearchPanel(props){
    const classes = useStyles();

    let [enSpecial, setEnSpecial] = useState(false)

    const state = { enSpecial }


    return <div className={classes.root}>
            <Card className={classes.card}>
                <CardContent>
                <FormControlLabel
                    control={<Checkbox onChange={_ => setEnSpecial(!enSpecial)} value={enSpecial} checked={enSpecial} />}
                    label="En Spécial"/>

                <Divider/>
                <Typography className={classes.title}>Catégories</Typography>
                <FilterCheckbox label="Catégories" filter="tpcategorie" />
                <JSONPretty data={state}/>
                </CardContent>
            </Card>
        </div>
}