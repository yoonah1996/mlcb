import React from "react";
import {makeStyles} from '@material-ui/styles'; 

const useStyles = makeStyles({
  root:{
    height: "100vh",
  },
  heads: {
    backgroundColor: "green",
    height: "20vh",
  },
  unders: {
    backgroundColor: "blue",
    height: "80vh",
    // width: "100vw",
  },
  sides: {
    backgroundColor:"red",
    height: "80vh",
    width: "100vw",
    float: "left"
  },
  mains: {
    backgroundColor:"yellow",
    height: "80vh",
    float: "right",
    width: "80vw",
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.heads}>
        My Little Cute Blog
      </div>
      <div className={classes.unders}>
        <div className={classes.sides}>
          사이드 만드는 중
        <div className={classes.mains}>
          내용 적는 곳
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
