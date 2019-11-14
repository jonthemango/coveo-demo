import React from 'react'
import { Card, CardContent, Typography, makeStyles, CardMedia, CardActions, Chip } from '@material-ui/core'
import LocalBarIcon from '@material-ui/icons/LocalBar';

const useStyles = makeStyles({
    card: {
      width: "30%",
      margin: "0 1em 1em 0",
      display: "block",
      float: "left",
      justifyContent: "space-between"
    },
    anchor: {
        textDecoration: "none",
        color: "inherit",
        '&:hover': {
            color: "#a83c6b"
        },
    },  
    title: {
        fontSize: "1em"
    },
    media: {
        maxWidth:"30%",
        maxHeight:"30%",
        minHeight: 200,
        margin: "0 auto",
        padding: "1em",
    },
    excerpt: {
        fontSize: "0.8em"
    },
    chip: {
        marginRight: "0.5em",
    }
  });

/**
 * When passed a result object, this component renders the static view of what
 * that component looks like. Displaying fields like price, category, name, image, link to saq site, etc
 * @param {result} props 
 */
export function Result(props){
    const classes = useStyles();
    return <Card className={classes.card}>
            <CardContent>
      <a className={classes.anchor} href={props.result.ClickUri} ><CardMedia
        component="img"
        className={classes.media}
        image={props.result.raw.tpthumbnailuri}
      />
        <Typography className={classes.title} component="h2">
          {props.result.title}
        </Typography>
        </a>
        <Typography>
            <b>{props.result.raw.tpprixnormal}</b>
        </Typography>
    <Typography className={classes.excerpt} color="textSecondary" component="p">
          {props.result.excerpt}
    </Typography>
    <Chip icon={<LocalBarIcon/>} className={classes.chip} size="small" clickable label={props.result.raw.tpcategorie} />
    <Chip className={classes.chip} size="small" clickable label={props.result.raw.tpformat} />
    </CardContent>
    <CardActions>
    </CardActions>
  </Card>

}