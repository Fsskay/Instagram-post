import React, {Component} from 'react';

class Detail extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {DetailOfItem} = this.props


        return (
            <React.Fragment>
                <div>
                    <div>{DetailOfItem.date}</div>
                    <div>{DetailOfItem.content}</div>
                    <div>{DetailOfItem.ig_handle}</div>
                </div>
            </React.Fragment>
        );
    }
}

export default Detail
