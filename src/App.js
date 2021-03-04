import './App.css';
import Header from "./components/header/Header";
import LeftColumn from "./components/navbar/LeftColumn";
import {BrowserRouter, Route} from "react-router-dom";
import CentralMenu from "./components/centralMenu/CentralMenu";
import Content from "./components/content/Content";


function App(props) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <CentralMenu />
                <div className='middle-wrapper'>
                    <div className='middle'>
                        <LeftColumn />
                        <Content state={props.state} addPost={props.addPost}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
