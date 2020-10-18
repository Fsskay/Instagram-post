import {Button, Collapse} from 'antd';
import React ,{Component}from "react";
import PostImg from "./PostImg";


const { Panel } = Collapse;


class Collapse1 extends Component{
    constructor(props) {
        super(props);

    }

    render() {


        return(
            <div>
                <Collapse defaultActiveKey={['1']} accordion>
                    <Panel header="storage" key="1">
                        <PostImg items={this.props.items1}  category='storage'/>
                    </Panel>
                    <Panel header="bedroom" key="2">
                        <PostImg items={this.props.items3}  category='bedroom'/>
                    </Panel>
                    <Panel header="living" key="3">
                        <PostImg items={this.props.items2} category='living'/>
                    </Panel>
                    <Panel header="dining" key="4">
                        <PostImg items={this.props.items4}  category='dining'/>
                    </Panel>
                    <Panel header="other" key="5">
                        <PostImg items={this.props.items5}  category='other'/>
                    </Panel>
                </Collapse>

            </div>
        )
    }
}



export default Collapse1;