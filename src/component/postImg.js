import React from 'react';
import {parseToYearAndMonth} from '../utility'
import {Image} from 'antd'

class ImageDemo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {items} = this.props
        const parsedDate = parseToYearAndMonth(items.date)
        console.log(parsedDate, 'parsedDate')
        console.log(items, 'items')
        console.log(items.image, 'items.image')

        // const [random, setRandom] = React.useState();
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row" style={{textAlign:"center",}}>
                        {
                            items.map((item) => (
                                <div className="col-xs-6 col-sm-3" style={{width:245,overflow:"hidden"}}>
                                    <Image
                                        width={245}
                                        // src={`https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${random}`}
                                        src={item.image}
                                        placeholder={
                                            <Image
                                                src={`${item.image}?x-oss-process=image/quality,q_1/resize,w_200`}
                                                width={200}
                                            />
                                        }
                                    />
                                    <p>{item.ig_handle}</p>
                                    <p>{item.date}</p>
                                </div>
                            ))}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


export default ImageDemo