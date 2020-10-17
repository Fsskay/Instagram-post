import {Button, Collapse} from 'antd';
import React ,{Component}from "react";
import ImageDemo from "./postImg";
import Detail from "../container/Detail";
import withContext from "../WithContext";
import {withRouter} from 'react-router-dom'

const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;


class Collapse1 extends Component{
    constructor(props) {
        super(props);

    }

    render() {


        return(
            <div>
                <Collapse defaultActiveKey={['1']} accordion>
                    <Panel header="storage" key="1">
                        <ImageDemo items={this.props.items1} onSelectedItems2={this.props.onSelectedItem}/>
                    </Panel>
                    <Panel header="bedroom" key="2">
                        <ImageDemo items={this.props.items3} onSelectedItems2={this.props.onSelectedItem}/>
                    </Panel>
                    <Panel header="living" key="3">
                        <ImageDemo items={this.props.items2} onSelectedItems2={this.props.onSelectedItem}/>
                    </Panel>
                    <Panel header="dining" key="4">
                        <ImageDemo items={this.props.items4} onSelectedItems2={this.props.onSelectedItem}/>
                    </Panel>
                    <Panel header="other" key="5">
                        <ImageDemo items={this.props.items5} onSelectedItems2={this.props.onSelectedItem}/>
                    </Panel>
                </Collapse>

            </div>
        )
    }
}



export default Collapse1;