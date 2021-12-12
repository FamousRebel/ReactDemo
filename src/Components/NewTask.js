import React,{Component} from "react";
import "../css/NewTask.css"

class NewTask extends Component{
    constructor(props) {
        super(props);
        this.state = {
            showElem:true
        }
        this.addList = this.addList.bind(this);
        this.showBox = this.showBox.bind(this);
    }

    render() {
        const showBox = this.state.showElem;
        return(
            <div className="boxNew">
                <button
                    className="newBtn"
                    onClick={this.showBox}
                    style={{
                        display: showBox ? 'block' : 'none'
                    }}
                >
                    新建任务
                </button>
                <div
                    className="newBox"
                    style={{
                        display: showBox ? 'none' : 'block'
                    }}
                >
                    <label>
                        新建任务:
                        <input
                            className="boxText"
                            type="text"
                        />
                    </label>

                    <button
                        className="boxBtn"
                        onClick={this.addList}
                    >
                        保存
                    </button>
                </div>
            </div>
        );
    }
    showBox(){
        // 按钮与输入框之间的显示/隐藏 切换
        this.setState({
            showElem:!this.state.showElem
        })
    }
    addList(){
        // 控制控件之间的显示和隐藏
        this.setState({
            showElem:!this.state.showElem
        })
    }
}

export default NewTask;