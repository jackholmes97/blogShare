import React from 'react'

export default function About() {
    return (
        <div className="about">
            <h1>BlogShare</h1>
            <div className='about-text'>
                <h2>What is BlogShare?</h2>
                <p>We are a site that was built by Flatiron students, for Flatiron students. It is an online database meant to help students explore different perspectives on a wide variety of topics covered at Flatiron School. Here you can browse, search, and submit Flatiron School blog posts. This website was made as a culminating project for our 2nd Phase using React.js and includes resources from: Google Fonts, Material UI, and  React Router 6. In the coming months, we hope to expand functionality and interactivity features like adding an account-based interface, commenting capability, and social media share buttons.</p>
                <br></br>
                <p>Here you can:</p>
                <ul>
                    <li>Browse blog posts from past and current students of Flatiron School across all disciplines and phase.</li>
                    <li>Search for specific topics of interest as well as filter your list by discipline and phase.</li>
                    <li>Submit your own blog post assignment to our database of over 100 submissions.</li>
                </ul>
                <br></br>
                <p>We hope this is a helpful tool. Happy Browsing!</p>
            </div>
        </div>
    )
}