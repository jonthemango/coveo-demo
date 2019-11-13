import React, {useState, useEffect} from 'react';
import {SearchBar} from './components/SearchBar';
import {SearchPanel} from './components/SearchPanel';
import {ResultsPage} from './components/ResultsPage';
import {DidYouMean} from './components/DidYouMean';
import {Search} from './algorithms/api';
import {Grid} from '@material-ui/core';
import './App.css';

function App() {

  let [results, setResults] = useState([])
  let [searchParams, setSearchParams] = useState({numberOfResults: 30, firstIndex: 0})
  let [queryCorrections, setQueryCorrections] = useState([]);
  let [loading, setLoading] = useState(false);
  let [page, setPage] = useState(0);

  /**
   * Every time SearchPanel changes the searchParams state then make
   * a request to the API and re-render the results list.
   */
  useEffect(()=>{
    setResults([]); // empty the results
    setQueryCorrections([]) // empty the "did you mean corrections"
    setLoading(true); // start loading
    let searchPromise = Search(searchParams); // make a search to search
    searchPromise.then((res) => { // once the searchPromise is resolved then set the results and corrections, finally stop loading
      console.log("api response", res);
      setResults(res.data.results);
      setQueryCorrections(res.data.queryCorrections);
    }).catch(err => {
      console.log(err)
    }).finally(() => {
      setLoading(false);
    })
  },[searchParams])

  const query = () => {
    console.log(page)
    setSearchParams({
      numberOfResults: 30,
      firstIndex: page,
      q: searchParams.q
    })
  }

  return (
    <Grid container className="coveo-app">
      <SearchBar setPage={setPage} setSearchParams={setSearchParams} />
      
      <Grid item xs={3}>
        <SearchPanel/>
      </Grid>

      <Grid item xs={9}>
        <ResultsPage results={results} setSearchParams={setSearchParams} page={page} setPage={setPage} query={query} loading={loading} /> 
        { queryCorrections.length > 0 ?
          <DidYouMean setSearchParams={setSearchParams} queryCorrections={queryCorrections} /> :
            null
        }
      </Grid>
    </Grid>
  );
}

export default App;
