import React, {useState, useEffect} from 'react'
import {Card, CardContent, makeStyles} from '@material-ui/core';
import {FilterCheckbox} from './FilterCheckbox';
import {Search} from '../algorithms/api';
import {filters} from '../algorithms/filters';

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
    let [facets, setFacets] = useState([]);

    useEffect(()=>{
        /**
         * Gets the facets dynamically for the side panel
         * using the "filters" constant which maps all the filters we want to their
         * nice nices for display purposes.
         */
        let groupBy = Object.keys(filters).map(field =>{
            return {field: `@${field}`}
        })
        let obj = {
            groupBy,
        }
        Search(obj).then(res => {
            console.log(res.data.groupByResults)
            setFacets(res.data.groupByResults)
        })
    },[]) // [] means "do Once"

    

    return <div className={classes.root}>
            <Card className={classes.card}>
                <CardContent>
                {
                    facets.map(facet => {
                        return <FilterCheckbox key={facet.field} label={filters[facet.field]} facetType={facet.field} facetList={facet.values} />
                    })
                }
                </CardContent>
            </Card>
        </div>
}