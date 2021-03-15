import './App.css';
import Header from "./components/header/Header";
import LeftColumn from "./components/navbar/LeftColumn";
import {BrowserRouter} from "react-router-dom";
import CentralMenu from "./components/centralMenu/CentralMenu";
import Content from "./components/content/Content";
import {Provider} from "react-redux";


function App(props) {
    return (
        <BrowserRouter>
            <Provider store={props.store}>
            <div className='app-wrapper'>
                <Header />
                <CentralMenu />
                <div className='middle-wrapper'>
                    <div className='middle'>
                        <LeftColumn />
                        <Content />
                    </div>
                </div>
            </div>
            </Provider>
        </BrowserRouter>
    )
}


export default App;
