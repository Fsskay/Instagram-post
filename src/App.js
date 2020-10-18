import React, {Component} from 'react';
import './App.css';
import Collapse1 from '../src/component/Collapse1'
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import axios from 'axios';
import StorageDetail from "../src/component/StorageDetail";
import BedroomDetail from "../src/component/BedroomDetail";
import LivingDetail from "../src/component/LivingDetail";
import DiningDetail from "../src/component/DiningDetail";
import OtherDetail from "../src/component/OtherDetail";



export function convertResponseData(dataObj){
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
    async componentDidMount() {
        // 为给定 ID 的 user 创建请求,取得数据
        //这部分是主页面的初始化数据
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
        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Collapse1
                            items1={this.state.storage}
                            items2={this.state.living}
                            items3={this.state.bedroom}
                            items4={this.state.dining}
                            items5={this.state.other}
                            onSelectedItem={this.SelectItems}/>
                    </Route>


                    <Route exact path="/storage/:id" component={StorageDetail}>
                    </Route>
                    <Route exact path="/bedroom/:id" component={BedroomDetail}>
                    </Route>
                    <Route exact path="/living/:id" component={LivingDetail}>
                    </Route>
                    <Route exact path="/dining/:id" component={DiningDetail}>
                    </Route>
                    <Route exact path="/other/:id" component={OtherDetail}>
                    </Route>
                </Switch>
            </Router>
        );
    }
}


export default App;