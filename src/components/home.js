import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

class home extends Component {
    render () {
        return(
            <div style={{width: '%100', margin: 'auto'}}>
                <Grid className="home-grid">
                    <Cell col={12}>
                        <div className="avatar-square">
                            <img 
                                src="https://i.pinimg.com/564x/a6/93/24/a69324d4be7f4d7f53323a3b5d2c8433.jpg"
                                alt="avatar"
                                className="avatar-img"
                            />
                        </div>
                        <div className="banner">
                            <h1>Family's Recipes</h1>
                            <hr/>
                            
                            <p>Cookies | Brownies | Cakes | Pies | Ice Cream</p>
                            
                            <div className="social-links">
                                <a href="https://www.instagram.com/ianarduarte/?hl=pt-br" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-instagram" aria-hidden="true" />
                                </a>

                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-youtube" aria-hidden="true" />
                                </a>

                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-facebook" aria-hidden="true" />
                                </a>

                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-twitter" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default home