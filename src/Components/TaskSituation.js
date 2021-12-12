import React,{Component} from "react";
import "../css/TaskSituation.css"

class TaskSituation extends Component{
    render() {
        return(
            <div className="boxSituation">
                <span>已完成()/总数()</span>
            </div>
        );
    }
}
export default TaskSituation;