import React from 'react';
import './Home.css';

import { Container, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


export default class HomePage extends React.Component {
    render() {
        return (
            <>
            <div className="main d-flex"
                style={{
                    backgroundImage:`url('images/tierra-mallorca-rgJ1J8SDEAY-unsplash.jpg')`
                }}
            >
                <div className="inner_main">
                    <h2>Blueshade Enteprises</h2>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in molestie sem, in dictum enim. Maecenas nec ante nunc. In in posuere nulla. Vestibulum et lacus et ante feugiat faucibus. 
                        Donec vitae nunc placerat, semper ligula quis, laoreet ex.
                    </div>

                    <div className="cta-section">
                        <Button variant="contained" size="large" classes={{contained:'btn'}}>
                            Property
                        </Button>
                    </div>
                </div>

                <div>

                </div>
            </div>

            <Container maxWidth="lg">
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '50vh' }} />
            </Container>
        </>
        )
    }
}