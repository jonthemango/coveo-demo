import React, {useState, useEffect} from 'react'
import {AppBar, InputBase, Toolbar, Typography, Button, Drawer, List, ListItem, Divider, ListItemIcon, ListItemText, makeStyles} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        background: "#740033",
        marginLeft: "15em",
    },
    textField : {
        width: "100%",
    },
    search: {
        marginLeft: "3em",
        color: "#ffffff",
        position: 'absolute',
        right: 0,
        borderRadius: "5px",
        backgroundColor: "#84023a",
        '&:hover': {
          opacity: .9,
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
      },
    searchIcon: {
        width: theme.spacing(6),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    inputRoot: {
        color: 'inherit',
      },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),  
      },
  }));

export function SearchBar(props){
    const classes = useStyles();

    let [searchBar, setSearchBar] = useState("")

    return <><AppBar className={classes.appBar} position="fixed">
        <Toolbar>
          <div className={classes.toolbar} />
          <Typography className={classes.title} variant="h6" noWrap>
            SAQ
          </Typography>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search..."
              onChange={event => setSearchBar(event.target.value)}
              onKeyPress={event => {if (event.key === "Enter") props.setSearchParams({q: searchBar, aq: "@tpcouleur==Blanc", enableDidYouMean: true, numberOfResults:30})}}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />

          </div>
            
        </Toolbar>
        </AppBar>
        </>
}