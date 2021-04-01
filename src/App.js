import './App.css';
import React from 'react'
import Header from "./components/header/Header";
import LeftColumn from "./components/navbar/LeftColumn";
import CentralMenu from "./components/centralMenu/CentralMenu";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import {connect} from "react-redux";
import {initAppThunk, showErrorMessageThunk} from "./redux/app-reducer";
import Preloader from "./components/preloader/Preloader";
import ErrorMessage from "./components/errorMessage/ErrorMessage";


class App extends React.Component {

    catchUnhandledErrors = (event) => {
        this.props.showErrorMessageThunk(event.reason.message)
    }

    componentDidMount() {
        this.props.initAppThunk()
        window.addEventListener('unhandledrejection', this.catchUnhandledErrors)
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchUnhandledErrors)
    }

    render() {
        if (!this.props.initApp) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
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

let mapStateToProps = (state) => ({
    initApp: state.init.initApp,
    errorMessage: state.init.errorMessage,
})

export default connect(mapStateToProps, {initAppThunk, showErrorMessageThunk})(App);
