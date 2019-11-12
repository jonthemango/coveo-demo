import React, {useState, useEffect} from 'react';
import {SearchBar} from './components/SearchBar';
import {SearchPanel} from './components/SearchPanel';
import {ResultsPage} from './components/ResultsPage';
import {Search} from './algorithms/api';
import {CircularProgress, Grid} from '@material-ui/core';
import './App.css';

function App() {

  let [results, setResults] = useState([])
  let [searchParams, setSearchParams] = useState({numberOfResults: 30})
  
  /**
   * Every time SearchPanel changes the searchParams state then make
   * a request to the API and re-render the results list.
   */
  useEffect(()=>{
    setResults([]);
    let searchPromise = Search(searchParams);
    searchPromise.then((res) => {
      console.log("api response", res);
      setResults(res.data.results);
    }).catch(err => {

    }).finally(() => {
      
    })
  },[searchParams])

  return (
    <Grid container>
      <SearchBar setSearchParams={setSearchParams} />
      
      <Grid item xs={3}>
        <SearchPanel/>
      </Grid>
      <Grid item xs={9}>
      {results.length > 0 ? 
        <ResultsPage results={results} /> : 
        <div style={{width: "100%", display: "flex", justifyContent: "center", marginTop: "20em"}}><CircularProgress  color="secondary" /></div>
      }
      </Grid>
    </Grid>
  );
}

export default App;
