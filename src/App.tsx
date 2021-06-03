import './App.css'
import React from 'react'
import 'antd/dist/antd.css'
import Header from './components/header/Header'
import LeftColumn from './components/navbar/LeftColumn'
import CentralMenu from './components/centralMenu/CentralMenu'
import Content from './components/content/Content'
import Footer from './components/footer/Footer'
import { connect } from 'react-redux'
import { initAppThunk, showErrorMessageThunk } from './redux/app-reducer'
import Preloader from './components/preloader/Preloader'
import ErrorMessage from './components/errorMessage/ErrorMessage'
import { AppStateType } from './redux/redux-store'

type MapDispatchPropsType = {
    initAppThunk: () => void
    showErrorMessageThunk: (message: string) => void
}
type MapStatePropsType = ReturnType<typeof mapStateToProps>
type PropsType = MapStatePropsType & MapDispatchPropsType

class App extends React.Component<PropsType> {
    catchUnhandledErrors = (event: PromiseRejectionEvent) => {
        this.props.showErrorMessageThunk(event.reason.message)
    }

    componentDidMount () {
        this.props.initAppThunk()
        window.addEventListener('unhandledrejection', this.catchUnhandledErrors)
    }

    componentWillUnmount () {
        window.removeEventListener('unhandledrejection', this.catchUnhandledErrors)
    }

    render () {
        if (!this.props.initApp) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                {this.props.inProgress ? <Preloader/> : null}
                <Header/>
                <CentralMenu/>
                <div className='middle-wrapper'>
                    <div className='middle'>
                        <LeftColumn/>
                        <Content/>
                    </div>
                    <ErrorMessage message={this.props.errorMessage} />
                </div>
                <Footer showError={this.props.showErrorMessageThunk}/>
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initApp: state.init.initApp,
    errorMessage: state.init.errorMessage,
    inProgress: state.usersPage.inProgress
})

export default connect<MapStatePropsType, MapDispatchPropsType, null, AppStateType>(mapStateToProps,
    { initAppThunk, showErrorMessageThunk })(App)
