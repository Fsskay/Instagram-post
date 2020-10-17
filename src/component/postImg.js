import React from 'react';
import {parseToYearAndMonth} from '../utility'
import {Image} from 'antd'

class ImageDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: {}
        }
    };

    selectedItem = (item) => {
        this.setState({selectedItem:item})
    }
    // getIntoDetail=()=>{
    //     this.props.history.push('/Detail')
    // }


    render() {
        const {items} = this.props
        const parsedDate = parseToYearAndMonth(items.date)
        console.log(parsedDate, 'parsedDate')
        console.log(items, 'items')

        console.log('selectedItems',this.state.selectedItem)

        return (
            <React.Fragment>
                <div className="container">
                    <div className="row" style={{textAlign: "center",}}>
                        {
                            items.map((item) => {
                                    return (
                                        <div
                                            className="col-xs-6 col-sm-3"
                                            style={{width: 245, overflow: "hidden"}}
                                            onClick={()=>{console.log({item},'onClick item')}}
                                        >
                                            <img
                                                width={245}
                                                src={item.image}
                                                placeholder={
                                                    <img
                                                        src={`${item.image}?x-oss-process=image/quality,q_1/resize,w_200`}
                                                        width={200}
                                                    />
                                                }
                                                // onClick={this.getIntoDetail}
                                            />
                                            <p>{item.ig_handle}</p>
                                            <p>{item.date}</p>
                                        </div>
                                    )
                                }
                            )}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


export default ImageDemo