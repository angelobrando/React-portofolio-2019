import React, {Component} from 'react';
import {Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render(){
        return(
            <div style={{width:'100%', margin:'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                         <img 
                            src="https://www.shareicon.net/data/512x512/2015/09/18/103157_man_512x512.png"
                            alt="avatar"
                            className="avatar-img"
                         />
                         <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr/>
                            <p>HTML/CSS | Javascript | React | Java | React | NodeJS | Android Development</p>
                             
                                <div className = "social-links">
                                {/*Linkedin*/}
                                <a href="www.google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fab fa-linkedin" aria-hidden="true"></i>
                                </a>
                                {/*GitHub*/}
                                <a href="www.google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fab fa-github" aria-hidden="true"></i>
                                </a>
                                {/*Instagram*/}
                                <a href="www.google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fab fa-instagram" aria-hidden="true"></i>
                                </a>
                                {/*GitHub*/}
                                <a href="mailto:anwarbougamza@gmail.com" rel="noopener noreferrer" target="_blank">
                                <i className="fas fa-envelope-square" aria-hidden="true"></i>
                                </a> 
                                </div>
                         </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}


export default Landing;