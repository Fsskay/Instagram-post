import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import axios from "axios";
import {convertResponseData} from "../App";


function getContentById(id, data) {
    for (let i = 0; i < data.length; i++) {
        if (data[i]._uid == id) {
            return data[i];
        }
    }
}

class OtherDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            valueOfSelectedItems:''
        }
    }

    async componentDidMount() {
        const {id} = this.props.match.params
        this.setState({
            id
        })
        const resData = await axios.get('/story')
        let {storage, living, bedroom, dining, other} = convertResponseData(resData)
        let SelectedItems = getContentById(id,other)
        this.setState({
            valueOfSelectedItems:SelectedItems
        })

    }
    BackToHome=()=>{
        this.props.history.push('/')
    }

    render() {
        const {valueOfSelectedItems} = this.state.valueOfSelectedItems
        return (
            <React.Fragment>
                <div style={{textAlign:"center"}}>
                    <div><img src={this.state.valueOfSelectedItems.image} alt="" style={{width:"60%"}}/></div>
                    <div style={{margin: "40px"}}>{this.state.valueOfSelectedItems.content}</div>
                    <div>{this.state.valueOfSelectedItems.ig_handle}</div>
                    <div>{new Date(this.state.valueOfSelectedItems.date).toDateString().split(" ")[1]} {new Date(this.state.valueOfSelectedItems.date).toDateString().split(" ")[3]}</div>
                    <button onClick={this.BackToHome}>Back</button>
                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(OtherDetail)