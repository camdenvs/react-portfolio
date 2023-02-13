import React from 'react'

export default function Project(props) {
    const image = props.image
    const title = props.title 
    const deployedUrl = props.deploy 
    const repoUrl = props.repo

    return (
        <div> 
            <img src={image} alt="Project snapshot" />
            <a href={deployedUrl}><h2>{title}</h2></a>
            <a href={repoUrl}>
                <img src='../../public/github512.png' alt='Github Logo' />
            </a>
        </div>
    )
}