import React, {Component} from 'react';
import './App.css';
import Collapse1 from '../src/component/Collapse1'
import {flatternArr} from "./utility"
import {testStorage} from './testData'
import 'bootstrap/dist/css/bootstrap.css'
import Detail from './container/Detail'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
export const AppContext = React.createContext();

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            storage: testStorage,
            flatternStorage: flatternArr(testStorage),
            selectedItem: {}
        }
        this.actions = {
            SelectItems:(item) => {
                this.setState({selectedItem: item})
            }
        }
    }



    render() {
        return (
            <AppContext.Provider value={{
                state: this.state,
                actions: this.actions
            }}>
                <Router>
                    <div className="App">
                        <Collapse1 items={this.state.storage} onSelectedItems={this.SelectItems}/>
                        {/*<Route path="/" exact component={Home}/>*/}
                        {/*<Route path="/Detail" exact component={Detail}/>*/}
                        <Detail items={this.state.storage}/>
                    </div>
                </Router>
            </AppContext.Provider>
        );
    }

}


export default App;