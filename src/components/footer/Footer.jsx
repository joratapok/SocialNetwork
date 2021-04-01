import React from 'react';
import classes from './Footer.module.css'

const Footer = ({showError}) => {

    const throwError = () => {
        showError('Some strange error has occured')
    }

    return(
        <div className={classes.footerWrapper}>
            <button className={classes.errorButton}
                    onClick={throwError}>Throw error</button>
        </div>
    )
}

export default Footer;
