import React,{Component} from "react";
import SearchTask from "./Components/SearchTask";
import List from "./Components/List";
import NewTask from "./Components/NewTask";
import TaskSituation from "./Components/TaskSituation";
import "./App.css";

class App extends Component{
    constructor(props) {
        super(props);
        // 初始化
        this.state= {
            list: [
                {id: '1学习React技术', name: '学习React技术', done: true},
                {id: '2学习后端API', name: '学习后端API', done: false},
                {id: '3完成任务列表', name: '完成任务列表', done: false},
                {id: '4完成删除任务', name: '完成删除任务', done: false},
                {id: '5完成搜索任务', name: '完成搜索任务', done: false},
                {id: '6完成任务分租', name: '完成任务分租', done: false},
                {id: '7完成任务打标签', name: '完成任务打标签', done: false},
            ]
        }
    }
    render() {
        const {list} = this.state;
        return(
            <div className="box">
                <SearchTask/>
                <List
                    list = {list}
                />
                <NewTask/>
                <TaskSituation/>
            </div>
        );
    }
}
export default App;