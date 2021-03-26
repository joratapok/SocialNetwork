import './App.css';
import React from 'react'
import Header from "./components/header/Header";
import LeftColumn from "./components/navbar/LeftColumn";
import CentralMenu from "./components/centralMenu/CentralMenu";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import {connect} from "react-redux";
import {initAppThunk} from "./redux/app-reducer";
import Preloader from "./components/preloader/Preloader";




class App extends React.Component {

    componentDidMount() {
        this.props.initAppThunk()
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
                </div>
                <Footer/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    initApp: state.init.initApp
})

export default connect(mapStateToProps, {initAppThunk,})(App);
