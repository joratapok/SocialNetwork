import './App.css';
import React from 'react'
import Header from "./components/header/Header";
import LeftColumn from "./components/navbar/LeftColumn";
import {BrowserRouter} from "react-router-dom";
import CentralMenu from "./components/centralMenu/CentralMenu";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import {Provider} from "react-redux";
import {connect} from "react-redux";
import {initAppThunk} from "./redux/app-reducer";
import Preloader from "./components/preloader/Preloader";


class App extends React.Component {

  componentDidMount() {
    this.props.initAppThunk()
  }

  render() {
    if (!this.props.initApp) {
      return <Preloader />
    }

    return (
        <BrowserRouter>
            <Provider store={this.props.store}>
            <div className='app-wrapper'>
                <Header />
                <CentralMenu />
                <div className='middle-wrapper'>
                    <div className='middle'>
                        <LeftColumn />
                        <Content />
                    </div>
                </div>
                <Footer />
            </div>
            </Provider>
        </BrowserRouter>
    )
  }
}
let mapStateToProps = (state) => ({
  initApp: state.init.initApp
})

export default connect(mapStateToProps, {initAppThunk, })(App);
