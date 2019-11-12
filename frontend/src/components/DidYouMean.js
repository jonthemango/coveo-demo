import React from 'react';
import {Typography, Chip,} from '@material-ui/core';

export function DidYouMean(props){
	return <div style={{width: "100%", display: "flex", justifyContent: "center", marginTop: "10em"}}>
		  <Typography>Did you mean the following?</Typography>
		  {props.queryCorrections.map(correction => {
			return <Chip style={{marginLeft: "0.5em"}} onClick={_ => {   
			  props.setSearchParams({q: correction.correctedQuery, numberOfResults: 30})  
			}} clickable key={correction} label={correction.correctedQuery} />
		  })}
		  </div>
}