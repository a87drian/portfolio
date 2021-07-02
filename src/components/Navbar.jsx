import React from 'react'
import { AppBar, List, makeStyles, Toolbar } from '@material-ui/core'
import { BuildTwoTone, ContactMailTwoTone, EmojiObjectsTwoTone, InfoTwoTone } from '@material-ui/icons'
import logo from '../Images/logo.png'
import {Link, animatedScroll as scroll} from 'react-scroll'

const links = [{
    id: "about",
    text: "About Me",
    icon: <InfoTwoTone/>
},    
{
    id: "skills",
    text: "My Skills",
    icon: <EmojiObjectsTwoTone/>
},
{
    id: "work",
    text: "My Work",
    icon: <BuildTwoTone/>
},
{
    id: "skills",
    text: "About Me",
    icon: <ContactMailTwoTone/>
}
]

const Navbar = () => {
    const classes = useStyles()
    return (
    <AppBar position="sticky" className={classes.root}>
      <Toolbar className={classes.toolbar}>
         <img src={logo} alt="Logo" className={classes.logo} /> 
         <List className={classes.menu}>
             
             {
             links.map(({id, text}, index) =>  (
                 <Link 
                 key={index}
                 to={id}
                 spy={true}
                 smooth={true}
                 duration={500}
                 offset={-70}

                 >{text}</Link>
                ))
             }  

         </List>
      </Toolbar>
    </AppBar>
    )
}
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#fafafa",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,

    },
    toolbar:{
        display: "flex",
        justifyContent:"flex-start",
        alignItems: "center"
    },
    logo: {
        height: "4rem",
        objectFit: "Contain",
        "&:hover":{  
            cursor: "pointer"
            }
    },
    menu:{
        "& a":{
            color:"#333",
            fontSize:"1.4rem",
            fontWeight:"bold",
            marginLeft: theme.spacing(3)
        }

    },
 
    sectiondark: {
        background: "#333",
        color: "#fff",
    },
  }))

export default Navbar
