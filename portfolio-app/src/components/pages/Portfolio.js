import React from 'react'
import Project from '../Project'

const projects = [
    {
        image: '../../../public/logo192.png',
        title: 'My Project',
        deploy: 'https://text-editor-app-farmfreshyeets.herokuapp.com/',
        repo: 'https://github.com/FarmFreshYeets/text-editor-app'
    },
    {
        image: '../../../public/logo192.png',
        title: 'My Project',
        deploy: 'https://text-editor-app-farmfreshyeets.herokuapp.com/',
        repo: 'https://github.com/FarmFreshYeets/text-editor-app'
    }
]

export default function Portfolio() {
    return (
        <div>
            {projects.map((project) => {
                return Project(project)
            })}
        </div>
    )
}