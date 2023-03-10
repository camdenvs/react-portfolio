import React from 'react'
import Project from '../Project'

const projects = [
    {
        image: 'ocean-driven.png',
        title: 'Ocean Driven',
        deploy: 'https://ocean-driven.herokuapp.com/',
        repo: 'https://github.com/mayamckinney/ocean-driven'
    },
    {
        image: 'google-books.png',
        title: 'Google Search Books',
        deploy: 'https://convenient-library.herokuapp.com/',
        repo: 'https://github.com/FarmFreshYeets/convenient-library'
    },
    {
        image: 'spoonfedreviews.png',
        title: 'Spoon-Fed Reviews',
        deploy: 'https://spoon-fed-reviews.herokuapp.com/',
        repo: 'https://github.com/FarmFreshYeets/spoon-fed-reviews'
    },
    {
        image: 'jate.png',
        title: 'Just Another Text Editor',
        deploy: 'https://text-editor-app-farmfreshyeets.herokuapp.com/',
        repo: 'https://github.com/FarmFreshYeets/text-editor-app'
    },
    {
        image: 'notetaker.png',
        title: 'Note Taker',
        deploy: 'https://farmfreshyeets-challenge-11.herokuapp.com/',
        repo: 'https://github.com/FarmFreshYeets/note-taker'
    },
    {
        image: 'steamingstreaming.png',
        title: "Steamin' and Streamin'",
        deploy: 'https://farmfreshyeets.github.io/Steamin-And-Streamin/',
        repo: 'https://github.com/FarmFreshYeets/Steamin-And-Streamin'
    },
    {
        image: 'passwordgen.png',
        title: "Password Generator",
        deploy: 'https://farmfreshyeets.github.io/challenge-3-vault/',
        repo: 'https://github.com/FarmFreshYeets/challenge-3-vault'
    },
    {
        image: 'scheduler.png',
        title: "Workday Scheduler",
        deploy: 'https://farmfreshyeets.github.io/challenge-5-busy/',
        repo: 'https://github.com/FarmFreshYeets/challenge-5-busy'
    }
]

export default function Portfolio() {
    return (
        <div>
            <h3>Portfolio</h3>
            <div className='projectList'>
                {projects.map((project) => {
                    return Project(project)
                })}
            </div>
        </div>
    )
}