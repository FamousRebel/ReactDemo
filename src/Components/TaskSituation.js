import React,{Component} from "react";
import "../css/TaskSituation.css"

class TaskSituation extends Component{
    render() {
        const {list} = this.props;
        return(
            <div className="boxSituation">
                {/*根据App传来的list然后进行filter过滤item.done为true的长度，即完成个数*/}
                {/*list的长度就是任务总数值*/}
                <span>已完成({list.filter(item => item.done === true).length})/总数({list.length})</span>
            </div>
        );
    }
}
export default TaskSituation;