import { makeStyles } from "@material-ui/core";
import Navbar from "./components/Navbar";

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}> 
      <Navbar />
      
    </div>
    )

}

