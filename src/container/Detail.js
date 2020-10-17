import React, {Component} from 'react';

class Detail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {items} = this.props
        console.log(items,'Detail items')
        console.log(items.date,'Detail items date')

        return (
            <React.Fragment>
                <div>123</div>
                <div>{items[2].date}</div>
                <div>{items[2].content}</div>
                <div>{items[2].ig_handle}</div>
            </React.Fragment>
        );
    }
}

export default Detail
