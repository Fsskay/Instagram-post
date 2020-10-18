import React from 'react';
import {parseToYearAndMonth} from '../utility'
import {withRouter} from "react-router-dom";


class PostImg extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        const {items, category} = this.props
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row" style={{textAlign: "center",}}>
                        {
                            items.map((item) => {
                                const id = item._uid
                                return (
                                    <div
                                        className="col-xs-6 col-sm-3"
                                        style={{width: 245, overflow: "hidden"}}

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
                                            onClick={(event)=>{{
                                                this.props.history.push(`/${category}/${id}`)
                                            }}}
                                        />
                                        <p style={{fontWeight:"bolder"}}>{item.ig_handle}</p>
                                        <p style={{fontStyle:"italic"}}>{new Date(item.date).toDateString().split(" ")[1]} {new Date(item.date).toDateString().split(" ")[3]}</p>
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


export default withRouter(PostImg)