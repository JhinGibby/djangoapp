/*# Project Name: ** MyProject **
# Creator Name: Stoyan Dimitrov
# Creation Date: 03-03-2024
# Timestamp: 16:40:32
# Notes: 
*/

import React from 'react';
import { Container, Typography, Button } from '@mui/material';

function HomePage() {
    return (
        <Container maxWidth="sm">
            <Typography variant="h2" component="h1" gutterBottom>
                DJ-React
            </Typography>
            <Typography variant="body1" paragraph>
                Here is my React on Django! This is a simple homepage built with React and Material-UI.
            </Typography>
            <Button variant="contained" color="primary">
                Learn More
            </Button>
        </Container>
    );
}

export default HomePage;

