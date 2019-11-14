import React from 'react';
import {Typography, Chip,} from '@material-ui/core';

/**
 * This component is displayed if there is a correction to the users search.
 * for example "murlot" prompts did you mean "merlot"
 * The list of corrections are clickable and re-search the api with the correct field
 * @param {queryCorrections, setSearchParams} props 
 */
export function DidYouMean(props){
	return <div style={{width: "100%", display: "flex", justifyContent: "center", marginTop: "10em"}}>
		  <Typography>Did you mean the following?</Typography>
		  {props.queryCorrections.map(correction => {
			return <Chip style={{marginLeft: "0.5em"}} onClick={_ => {   
			  props.setSearchParams({q: correction.correctedQuery, firstResult: 0, numberOfResults: 30})  
			}} clickable key={correction} label={correction.correctedQuery} />
		  })}
		  </div>
}