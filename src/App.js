import React,{Component} from 'react';
import './App.css';
import Collapse1 from '../src/component/Collapse1'
import {flatternArr} from "./utility"
import {testStorage} from './testData'
import 'bootstrap/dist/css/bootstrap.min.css'

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

            <div className="App">
                <Collapse1 items={this.state.storage}/>
            </div>
        );
    }

}



export default App;