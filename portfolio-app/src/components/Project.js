import React from 'react'

export default function Project(props) {
    const image = props.image
    const title = props.title
    const deployedUrl = props.deploy
    const repoUrl = props.repo

    return (
        <div className='projectCard'>
            <img src={image} alt="Project snapshot" className='projectSnapshot' />
            <div className='projectInfo'>
                <a href={deployedUrl}><h2>{title}</h2></a>
                <a href={repoUrl}>
                    <img src='github512.png' alt='Github Logo' className='smallImg' />
                </a>
            </div>
        </div>
    )
}