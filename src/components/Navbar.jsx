import React, { useState } from 'react'
import { AppBar, Divider, Drawer, IconButton, List, makeStyles, Toolbar, ListItem, ListItemIcon  } from '@material-ui/core'
import { BuildTwoTone, ContactMailTwoTone, EmojiObjectsTwoTone, InfoTwoTone } from '@material-ui/icons'
import MenuIcon from '@material-ui/icons/Menu';
import CancelIcon from '@material-ui/icons/Cancel';
import logo from '../Images/logo.png'
import {Link, animatedScroll as scroll} from 'react-scroll'

const links = [{
    id: "about",
    text: "About Me",
    icon: <InfoTwoTone fontsize="large"/>
},    
{
    id: "skills",
    text: "My Skills",
    icon: <EmojiObjectsTwoTone fontsize="large"/>
},
{
    id: "work",
    text: "My Work",
    icon: <BuildTwoTone fontsize="large"/>
},
{
    id: "skills",
    text: "About Me",
    icon: <ContactMailTwoTone fontsize="large"/>
}
]

const Navbar = () => {
    const classes = useStyles()
    const [open, setOpen] = useState(false);
    return (
        <>
    <AppBar position="sticky" className={classes.root}>
      <Toolbar className={classes.toolbar}>
         <img src={logo} alt="Logo" className={classes.logo} /> 
         <List className={classes.menu}>
             
             {
             links.map(({id, text}, index) =>  (
                 <Link 
                 key={index}
                 activeClass="active"
                 to={id}
                 spy={true}
                 smooth={true}
                 duration={500}
                 offset={-70}

                 >{text}</Link>
                ))
             }  

         </List>
         <IconButton edge="end" className={classes.menubutton} onClick={()=>{ setOpen(!open)}}>
             <MenuIcon />
        
        </IconButton>   
      </Toolbar>
    </AppBar>
    <Drawer anchor="right" open={open} onClose={() => setOpen(false)}> 
    <IconButton  onClick={() => setOpen(false)} >
        <CancelIcon className={classes.cancelicon} />   
    </IconButton>
    <Divider/> {
     links.map(({id, text, icon}, index) =>  (
                 <Link 
                 className={classes.sidebar}
                 key={index}
                 activeClass="active"
                 to={id}
                 spy={true}
                 smooth={true}
                 duration={500}
                 offset={-70}
                 >
                     <ListItem component="h5">
                         <span>
                            <ListItemIcon>
                            {icon}    
                            </ListItemIcon> 
                        </span> {text}
                    </ListItem> 

                 </Link>
                 
                ))
            }

    </Drawer>
    </>
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
        [theme.breakpoints.down("sm")]:{
            display:"none"
        },
        "& a":{
            color:"#333",
            fontSize:"1.4rem",
            fontWeight:"bold",
            marginLeft: theme.spacing(3)
        },
        "& a:hover":{
            cursor: "pointer",
            color: "tomato",
            borderBottom: "3px solid tomato",
        }

    },

    sectiondark: {
        background: "#333",
        color: "#fff",
    },
    menubutton: {
        display: "none",
        [theme.breakpoints.down("sm")]:{
            display: "block",
            color:"tomato",
            position:"absolute",
            top:0,
            right: 10,
        }
    },
    cancelicon: {
        color:"tomato",
        position:"absolute",
        top: 0,
        right: 10,
    },
    sidebar: {
        width: "40vw",
        [theme.breakpoints.down("sm")]:{
            width: "60vw",
        },
        "& h5":{
            margin: theme.spacing(10,0,0,4),
            fontSize: "1.4rem",
            color: "#333",
            fontWeight: "bold",
        },
        "& h5:hover":{
            color: "tomato",
            cursor: "pointer"
            
        }

    }
    
  }))

export default Navbar
