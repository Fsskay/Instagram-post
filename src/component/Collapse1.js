import {Button, Collapse} from 'antd';
import React from "react";
import ImageDemo from "./postImg";


const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;


const Collapse1 = () => (
    <div>
        <Collapse defaultActiveKey={['1']} accordion>
            <Panel header="storage" key="1">
                <ImageDemo/>
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
        </Collapse>,
    </div>
);




export default Collapse1;