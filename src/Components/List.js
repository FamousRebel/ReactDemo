import React,{Component} from "react";
import PropTypes from 'prop-types'
import Item from "./Item";
import "../css/List.css"

class List extends Component{

    render() {
        const {list,toggleDoneItem,deleteList,groupName} = this.props;
        const groupitem = list.filter(item => item.grouping === groupName);
        return(
            <div className="listBox">
                <span className="boxSpan">{groupName}任务：</span>
                <ul className="boxItem">
                    {
                        groupitem.map( item => {
                            return (
                                <Item
                                    key={item.id}
                                    {...item}
                                    toggleDoneItem = {toggleDoneItem}
                                    deleteList = {deleteList}
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
    list:PropTypes.array.isRequired,
    toggleDoneItem:PropTypes.func.isRequired,
    deleteList:PropTypes.func.isRequired,
    groupName:PropTypes.array.isRequired
}
export default List;