import React from "react";
import {makeStyles} from '@material-ui/styles'; 

const useStyles = makeStyles({
  root:{
    height: "90vh",
    border: "1px solid black",
    position: "static",
    overflow: "hidden",
  },
  heads: {
    backgroundColor: "",
    height: "20vh",

  },
  sides: {
    backgroundColor:"",
    height: "80vh",
    width: "100vw",
    float: "left",
    textOverflow: "hidden",
    overflow:"auto",
  },
  mains: {
    backgroundColor:"",
    height: "80vh",
    float: "right",
    width: "85vw",
    overflow:"auto",

  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.heads}>
        My Little Cute Blog
      </div>
      <div>
        <div className={classes.sides}>
          사이드
          <div className={classes.mains}>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
