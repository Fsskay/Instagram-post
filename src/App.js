import React,{Component} from 'react';
import './App.css';
import Collapse1 from '../src/component/Collapse1'
import {flatternArr} from "./utility"
import {testStorage} from './testData'
import 'bootstrap/dist/css/bootstrap.css'

import Detail from './container/Detail'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            storage:testStorage
        }
    }

    render() {
        console.log('storage',this.state.storage)
        return(
            <Router>
                <div className="App">
                    <Collapse1 items={this.state.storage}/>
                    {/*<Route path="/" exact component={Home}/>*/}
                    {/*<Route path="/Detail" exact component={Detail}/>*/}
                    <Detail items={this.state.storage}/>
                </div>
            </Router>
        );
    }

}



export default App;