import {Button, Collapse} from 'antd';
import React ,{Component}from "react";
import ImageDemo from "./postImg";


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
                        <ImageDemo items={this.props.items} onSelectedItems={this.props.SelectItems}/>
                    </Panel>
                    <Panel header="bedroom" key="2">

                        <p>{text}</p>
                    </Panel>
                    <Panel header="living" key="3">

                        <p>{text}</p>
                    </Panel>
                    <Panel header="dining" key="4">

                        <p>{text}</p>
                    </Panel>
                    <Panel header="other" key="5">

                        <p>{text}</p>
                    </Panel>
                </Collapse>
            </div>
        )
    }
}



export default Collapse1;