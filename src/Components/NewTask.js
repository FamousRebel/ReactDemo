import React,{Component} from "react";
import PropTypes from 'prop-types'
import "../css/NewTask.css"

class NewTask extends Component{
    constructor(props) {
        super(props);
        this.state = {
            showElem:true
        }
        // this.inputChange = this.inputChange.bind(this);
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
            //任务分组  先判定分组跟标签两个是否都存在，然后在一次判定分组和标签是否存在，不在则按value值输出
            let nameValue1 =
                RegExp(/#/).test(this.boxText.value) ?
                    this.boxText.value.match(/(?<=#)(\S+)/)[0].match(/(?<=#)(\S+)/)[0] :
                    this.boxText.value;

            //判断是否有#存在，有就拿##之间的值，没有就为null
            let tagValue =
                RegExp(/#/).test(this.boxText.value) ?
                this.boxText.value.match(/(?<=#).*?(?=#)/)[0] : null;

            // 防止有空字符,使得标签显示
            if (tagValue === "")
                tagValue = null;

            // 当tag有值的时候,将tagDone的状态进行更改,使标签显示
            let tagDoneValue = false;
            if(tagValue != null)
                tagDoneValue = true;

            // 创建对象
            const listObj = {
                id: (this.props.len+1)+this.boxText.value,
                name: nameValue1,
                done: false,
                tag:tagValue,
                tagDone:tagDoneValue
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