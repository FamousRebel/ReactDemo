import React,{Component} from "react";
import PropTypes from 'prop-types'
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
                            ref={c => this.boxText = c}
                            className="boxText"
                            type="text"
                            placeholder="可选($分组$,#标签#)输入任务"
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

        // 判断是否为空
        if(this.boxText.value === '')
            alert("添加任务不能为空");
        else {
            // 创建对象
            const listObj = {
                id: (this.props.len+1)+this.boxText.value,
                name: this.boxText.value,
                done: false
            }

            console.log(listObj);
            this.props.addItem(listObj);
            this.boxText.value = '';
            // 控制控件之间的显示和隐藏
            this.setState({
                showElem:!this.state.showElem
            })
        }
    }
}

NewTask.propTypesr = {
    addItem:PropTypes.func.isRequired,
    len:PropTypes.number
}

export default NewTask;