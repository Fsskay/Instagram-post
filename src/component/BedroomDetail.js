import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import axios from "axios";
import {convertResponseData} from "../App";
import {Button, Image} from 'antd'


function getContentById(id, data) {
    for (let i = 0; i < data.length; i++) {
        if (data[i]._uid == id) {
            return data[i];
        }
    }
}

class BedroomDetail extends Component {
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
        let SelectedItems = getContentById(id,bedroom)
        this.setState({
            valueOfSelectedItems:SelectedItems
        })

    }
    BackToHome=()=>{
        this.props.history.push('/')
    }

    render() {
        return (
            <React.Fragment>
                <div style={{textAlign:"center"}}>
                    <div><Image src={this.state.valueOfSelectedItems.image} alt="" style={{maxWidth:"40%"}}/></div>
                    <div style={{margin: "40px"}}>{this.state.valueOfSelectedItems.content}</div>
                    <div style={{margin: "40px",fontWeight:"bolder"}}>{this.state.valueOfSelectedItems.ig_handle}</div>
                    <div style={{margin: "40px",fontStyle:"italic"}}>{new Date(this.state.valueOfSelectedItems.date).toDateString().split(" ")[1]} {new Date(this.state.valueOfSelectedItems.date).toDateString().split(" ")[3]}</div>
                    <Button type="primary" size={"large"} onClick={this.BackToHome}>Back</Button>
                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(BedroomDetail)    