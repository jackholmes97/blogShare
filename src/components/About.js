import React from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Typography from '@mui/material/Typography';
export default function About() {
    return (
        <div className="about">
            <div className='about-banner'>
                <h1>BlogShare</h1>
            </div>
            <div className='about-text'>
                <Typography variant='h2' gutterBottom>What is BlogShare?</Typography>
                <br></br>
                <Typography variant='body1' gutterBottom>We are a site that was built by Flatiron students, for Flatiron students. It is an online database meant to help students explore different perspectives on a wide variety of topics covered at Flatiron School. Here you can browse, search, and submit Flatiron School blog posts. This website was made as a culminating project for our 2nd Phase using React.js and includes resources from: Google Fonts, Material UI, and  React Router 6. In the coming months, we hope to expand functionality and interactivity features like adding an account-based interface, commenting capability, and more social media share buttons. We also hope to expand the scope of our site to include other bootcamps such as General Assembly, Tech Elevator, and Full Stack Academy.</Typography>
                <br></br>
                <Typography variant='body1' gutterBottom>Here you can:</Typography>
                <Typography variant='body1' gutterBottom>
                    <ul>
                        <li>Browse blog posts from past and current Flatiron School students across all disciplines and phases.</li>
                        <li>Search for specific topics of interest as well as filter your list by discipline and phase.</li>
                        <li>Submit your own blog post assignment to our growing database of 75+ submissions.</li>
                        <li>Share any blog post to your LinkedIn, Facebook, or Twitter feed</li>
                    </ul>
                </Typography>
                <br></br>
                <Typography variant='body1' gutterBottom>We hope this is a helpful tool. Happy Browsing!</Typography>
                <br></br>
                <Typography variant='body1' gutterBottom>
                    <ul className='signoff'>
                        <li className="signoff-content">Jack & Mark</li>
                    </ul>
                </Typography>
            </div>
            <div className='footer'>
                <Typography sx={{mb: 0}} variant='overline' display='block' gutterBottom>
                    Created by Jack Holmes and Mark Shkreli 
                </Typography>
            </div>
        </div>
    )
}