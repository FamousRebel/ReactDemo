import React,{Component} from "react";
import "../css/SearchTask.css"

class SearchTask extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="boxSearchTask">
                <h3 className="textTitle">任务便签(TODO LIST)</h3>
                <label className="textLabel">
                    搜索任务:
                    <input
                        type="txt"
                        placeholder="输入关键词,回车进行搜索"
                    />
                </label>
            </div>
        );
    }
}
export default SearchTask;