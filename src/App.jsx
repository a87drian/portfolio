import { makeStyles } from "@material-ui/core";
import About from "./components/About";
import MyWork from "./components/MyWork";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}> 
      <Navbar />
      <About title="About Me" id="about" dark={false}/>
      <Skills title="My Coding Journing" id="skills" dark={true}/>
      <MyWork title="My Work" id="work" dark={false}/>
      <Contact title="Get in touch" id="contact" dark={true}/>
    </div>
    )
  }
  const useStyles = makeStyles((theme) => ({
    root: {
      
    }

  }))
  export default App
  
