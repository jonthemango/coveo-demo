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


/**
 * Unfinished. This component currently queries the API for facets defined in the filters object in filters.js
 * No props are passed into it yet but in the future setSearchParams would be passed into it
 * So that when each of the FilerCheckbox components could re-set the searchParams as filters are modified
 * @param {} props 
 */
export function SearchPanel(props){
    const classes = useStyles();
    let [facets, setFacets] = useState([]);

    useEffect(()=>{
        /**
         * Gets the facets dynamically for the side panel
         * using the "filters" constant which maps all the filters we want to their
         * nice names for display purposes.
         */
        let groupBy = Object.keys(filters).map(field =>{
            return {field: `@${field}`}
        })
        let obj = {
            groupBy,
        }
        Search(obj).then(res => {
            console.log(res.data.groupByResults)
            setFacets(res.data.groupByResults) // each of the results in groupByResults is a facet, includes facet.field and facet.values
        })
    },[]) // [] means "do Once"

    

    return <div className={classes.root}>
            <Card className={classes.card}>
                <CardContent>
                { // for each of the facets make a set of checkboxes for selecting which filters the user wants
                    facets.map(facet => {
                        return <FilterCheckbox key={facet.field} label={filters[facet.field]} facetType={facet.field} facetList={facet.values} />
                    })
                }
                </CardContent>
            </Card>
        </div>
}