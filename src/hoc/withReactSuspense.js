import React from 'react'
import Preloader from "../components/preloader/Preloader";

export const withReactSuspense = (Component) => {
    const RedirectComponent = (props) => {
        return <React.Suspense fallback={<Preloader/>}>
            <Component {...props}/>
        </React.Suspense>
    }
    return RedirectComponent
}