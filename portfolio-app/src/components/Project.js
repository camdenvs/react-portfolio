import React from 'react'

export default function Project(props) {
    const image = props.image
    const title = props.title 
    const deployedUrl = props.deploy 
    const repoUrl = props.repo

    return (
        <a href={deployedUrl}> 
            <img src={image} alt="Project snapshot" />
            <h2>{title}</h2>
            <a href={repoUrl}>
                <img src='../../public/github512.png' alt='Github Logo' />
            </a>
        </a>
       
    )
}