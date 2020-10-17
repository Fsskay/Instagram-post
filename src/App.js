import React, {Component} from 'react';
import './App.css';
import Collapse1 from '../src/component/Collapse1'
import {flatternArr} from "./utility"
import 'bootstrap/dist/css/bootstrap.css'
import Detail from './container/Detail'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import axios from 'axios';


console.log('axios', axios);



function convertResponseData(dataObj){
    return dataObj.data.content;
}






class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            storage: [],
            living:[],
            bedroom:[],
            dining:[],
            other:[],
            selectedItem: {}
        }
    }
    SelectItems = (item) => {
        this.setState({
            selectedItem: item
        })
    }

    async componentDidMount() {
        // 为给定 ID 的 user 创建请求
        const resData = await axios.get('/story')


        let {storage, living, bedroom, dining, other} = convertResponseData(resData)


        this.setState({
            storage,
            living,
            bedroom,
            dining,
            other,
        })

    }

    render() {
        console.log('storage', this.state.storage)
        console.log('storage', this.state.flatternStorage)
        return (
            <Router>
                <div className="App">
                    <Collapse1
                        items1={this.state.storage}
                        items2={this.state.living}
                        items3={this.state.bedroom}
                        items4={this.state.dining}
                        items5={this.state.other}

                        onSelectedItem={this.SelectItems}/>
                    {/*<Route path="/" exact component={Home}/>*/}
                    {/*<Route path="/Detail" exact component={Detail}/>*/}
                    <Detail DetailOfItem={this.state.selectedItem}/>
                </div>
            </Router>
        );
    }
}


export default App;