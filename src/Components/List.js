import React,{Component} from "react";
import "../css/List.css"

class List extends Component{

    render() {
        return(
            <div className="listBox">
                <span className="boxSpan"></span>
                <ul className="boxItem">
                </ul>
            </div>
        );
    }
}
export default List;