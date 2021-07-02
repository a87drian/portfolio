import { makeStyles } from '@material-ui/core'
import React from 'react'

function Skills({title, id, dark}) {
    const classes = useStyles();
    return (
        <div className={`${classes.section} ${dark && classes.sectiondark}`}>
            Skills
        </div>
    )
}
const useStyles = makeStyles((theme) => ({
    section: {
        minHeight: "100vh",
    },
    sectiondark: {
        background: "#333",
        color: "#fff"
    },

}))

export default Skills
