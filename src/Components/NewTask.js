import React,{Component} from "react";
import "../css/NewTask.css"

class NewTask extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="boxNew">
                <button className="newBtn">
                    新建任务
                </button>
                <div
                    className="newBox">
                    <label>
                        新建任务:
                        <input className="boxText" type="text"/>
                    </label>

                    <button className="boxBtn">
                        保存
                    </button>
                </div>
            </div>
        );
    }
}

export default NewTask;