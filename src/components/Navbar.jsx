import { AppBar, Toolbar } from '@material-ui/core'
import { BuildTwoTone, ContactMailTwoTone, EmojiObjectsTwoTone, InfoTwoTone } from '@material-ui/icons'
import React from 'react'

const links = [{
    id: "about",
    text: "About Me"
    icon: <InfoTwoTone/>
},    
{
    id: "skills",
    text: "My Skills"
    icon: <EmojiObjectsTwoTone/>
},
{
    id: "work",
    text: "My Work"
    icon: <BuildTwoTone/>
},
{
    id: "skills",
    text: "About Me"
    icon: <ContactMailTwoTone/>
}
]

const Navbar = () => {
    return (
    <AppBarBar position="sticky" className={classes.root}>
      <Toolbarar className={classes.toolbar}>
         <img src="" alt="" /> 
         <List className={classes.menu}>
             
             {
             links.map(({id, text}), index) =>  (
                 <Link key={index}>{text}</Link>
             )
             }

         </List>
      </Toolbar>
    </AppBar>
    )
}

export default Navbar
