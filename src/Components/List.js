import React,{Component} from "react";
import PropTypes from 'prop-types'
import Item from "./Item";
import "../css/List.css"

class List extends Component{

    render() {
        const {list} = this.props;
        return(
            <div className="listBox">
                <span className="boxSpan">未分组任务：</span>
                <ul className="boxItem">
                    {
                        list.map( item => {
                            return (
                                <Item
                                    key={item.id}
                                    {...item}
                                />
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

List.propTypesr = {
    list:PropTypes.array.isRequired
}
export default List;