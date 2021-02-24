import React from 'react';

import './Login.css';
import { Container, Button, Typography, TextField } from '@material-ui/core';

export default function LoginPage(props) {
    return(
        <Container maxWidth={"xs"}>
            <form noValidate autoComplete="off" className="login-form">
                <div className="header-section">
                    <h4>Login</h4>

                    <div>

                    </div>
                </div>

                
                <TextField 
                    id="email" 
                    label="Email" 
                />

                <TextField
                    id="password"
                    label="Password"
                />

                <Button variant="text" size="large" classes={{root:'my-4'}}>
                    GET STARTED
                </Button>
            </form>
        </Container>
    )
}