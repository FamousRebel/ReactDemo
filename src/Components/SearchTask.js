import React,{Component} from "react";
import "../css/SearchTask.css"

class SearchTask extends Component{
    constructor(props) {
        super(props);
        this.enterKeyUp = this.enterKeyUp.bind(this);
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
                        onKeyUp={this.enterKeyUp}
                    />
                </label>
            </div>
        );
    }

    enterKeyUp(event){
        const {search} = this.props;
        // 判定按下按键是否为回车按键
        if (event.key === 'Enter') {
            return search(event.target.value);
        }
    }
}
export default SearchTask;