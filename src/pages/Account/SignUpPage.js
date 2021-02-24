import { Container } from '@material-ui/core';
import React from 'react';
import { Container, Button, Typography, TextField } from '@material-ui/core';

export default function SignUpPage(props) {
    return(
        <Container>
            <form noValidate autoComplete="off">
                <TextField id="standard-basic" label="Search" fullWidth/>

                <Button variant="text" size="large" >
                    Search
                </Button>
            </form>
        </Container>
    )
}