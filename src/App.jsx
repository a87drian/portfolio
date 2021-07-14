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
      <About title="About Me" id="about" dark={true}/>
      <Skills title="My Coding Journing" id="skills" dark={false}/>
      <MyWork title="My Work" id="work" dark={true}/>
      <Contact title="Get in touch" id="contact" dark={false}/>
    </div>
    )
  }
  const useStyles = makeStyles((theme) => ({
    root: {
      
    }

  }))
  export default App
  
