import React from 'react';
import { Image, Button, Space } from 'antd';
import {parseToYearAndMonth} from '../utility'

class ImageDemo extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        const {items} = this.props
        const parsedDate = parseToYearAndMonth(items.date)
        console.log(parsedDate,'parsedDate')
        console.log(items,'items')
        console.log(items.image,'items.image')

        // const [random, setRandom] = React.useState();
        return (

            <ul>{ items.map((item)=>(
                <Space size={12}>
                    <Image
                        width={200}
                        // src={`https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${random}`}
                        src={item.image}
                        placeholder={
                            <Image
                                src={`${item.image}+?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200`}
                                width={200}
                            />
                        }
                    />
                    <p>{item.ig_handle}</p>
                    <p>{item.date}</p>

                </Space>

            ))}

            </ul>
        );
    }
}



export default ImageDemo