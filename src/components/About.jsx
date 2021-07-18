import { makeStyles, Typography, Card, CardMedia, CardContent, CardActions, Button} from '@material-ui/core'
import photo from "../Images/pp.jpg";
import React from 'react'
import TypeWriterEffect from 'react-typewriter-effect';
import cv from '../Images/CV.pdf'

//2:35

const About = ({title, id, dark}) => {
    console.log(dark)
    const classes = useStyles()
    return (
        <div className={`${classes.section} ${dark && classes.sectiondark}`}>
            <div className={classes.sectioncontent} id={id}>
                <Typography variant="h3">{title}</Typography>
                <Card className={classes.card}>
                    <CardMedia image={photo} className={classes.media} title="picture"/>
                    <CardContent className={classes.cardcontent} > 
                        <TypeWriterEffect
                            text="Hi, I am Adrián Chaves"
                            textStyle={{fontSize: "2rem", fontWeight: "700px", color: "tomato" }}
                            startDelay={100}
                            cursorColor="black"
                            typeSpeed={100}
                        />
                        <TypeWriterEffect
                            text="And i am developer"
                            textStyle={{fontSize: "1.2rem", fontWeight: "500px"}}
                            startDelay={2000}
                            cursorColor="black"
                            typeSpeed={100}
                        />
                        <Typography variant="h6" color="textSecondary">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, ex.

                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" className={classes.pdfbutton}>
                            <a href={cv} download>
                                Download CV
                            </a>
                        </Button>
                    </CardActions> 
                </Card>
            </div>
        </div>
    )
}
const useStyles = makeStyles((theme) => ({
    section: {
        minHeight: "100vh",
    },
    sectiondark: {
        background: "#333",
        color: "#fff",
    },
    sectioncontent: {
        maxWidth: "80vw",
        margin: "0 auto",
    },
    card: { 
        height: "70vh",
        display: "flex",
        marginTop: theme.spacing(6),
        position: "relative",
    },
    media:{
        width: "250px",
        height: "auto",
        objectFit: "cover",
        borderRadius: "10px",
        margin: theme.spacing(5)
    },
    cardcontent:{
        marginTop: theme.spacing(2),
        "& h6":{
            marginTop: theme.spacing(6),
             [theme.breakpoints.down("sm")]:{
                 display:"none", 
            },
        },
    },

    pdfbutton: {
        position:"absolute",
        button:"5rem",
        right:"4rem",
        [theme.breakpoints.down("sm")]:{
            bottom: "2rem",
            right: "1rem"
        },
        backgroundColor: "tomato",
        padding: theme.spacing(3),
        "& a":{
            color: "#fff",  
            textDecoration: "none",
            fontWeight: 900,
        },
        "& a:hover":{
            color:"tomato",

        } 
    },

}))

export default About
