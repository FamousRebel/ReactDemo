import React,{Component} from "react";
import SearchTask from "./Components/SearchTask";
import NewTask from "./Components/NewTask";
import TaskSituation from "./Components/TaskSituation";
import "./App.css";

class App extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        const {list,group} = this.state;
        return(
            <div className="box">
                <SearchTask/>
                <NewTask/>
                <TaskSituation/>
            </div>
        );
    }
}
export default App;