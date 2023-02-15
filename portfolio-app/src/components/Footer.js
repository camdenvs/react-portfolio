import React from 'react'

const styles = {
    footerIcon: {
        background: 'white',
        borderRadius: '10px',
        width: '75px',
        margin: '25px'
    }
}
export default function Footer() {
    return (
        <div className='footer'>
            <a href='https://stackoverflow.com/users/21194514/camden-van-sciver'>
                <img src='stackoverflow768.png' alt='Stack Overflow' style={styles.footerIcon}></img>
            </a>
            <a href='https://www.linkedin.com/in/camden-van-sciver-864037266/'>
                <img src='linkedin512.png' alt='LinkedIn' style={styles.footerIcon}></img>
            </a>
            <a href='https://github.com/FarmFreshYeets'>
                <img src='github512.png' alt='GitHub' style={styles.footerIcon}></img>
            </a>
        </div>
    )
}