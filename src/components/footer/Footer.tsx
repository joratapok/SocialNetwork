import React from 'react'
import classes from './Footer.module.css'

type PropsType = {
    showError: (message: string) => void
}

const Footer: React.FC<PropsType> = ({ showError }) => {
    const throwError = () => {
        showError('Some strange error has occured')
    }

    return (
        <div className={classes.footerWrapper}>
            <button className={classes.errorButton}
                onClick={throwError}>Throw error</button>
        </div>
    )
}

export default Footer
