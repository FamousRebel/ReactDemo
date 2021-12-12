import React, {Component} from 'react';
import "../css/Item.css";

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mouse:false
        }
        this.itemMouse = this.itemMouse.bind(this);
        this.itemClick = this.itemClick.bind(this);
        this.itemDelete = this.itemDelete.bind(this);
    }
    render() {
        const {id,name,done,tag,tagDone,grouping} = this.props;
        return (
            <li
                onMouseEnter={this.itemMouse(true)}
                onMouseLeave={this.itemMouse(false)}
            >
                <svg
                    t="1639238384140"
                    className={done ? 'iconTrue' : 'iconFalse'}
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="2609"
                    onClick={this.itemClick(id,done)}
                >
                    <path
                        d="M741.216 344a32 32 0 0 1 46.816 43.616l-315.296 338.208a32 32 0 0 1-43.968 2.688l-193.344-162.368a32 32 0 1 1 41.152-48.992l170.08 142.816 294.56-316z"
                        p-id="4886"
                        fill= '#fff'
                        style={{display:done? 'block' : 'none'}}
                    >
                    </path>
                </svg>
                <span
                    className={done ? 'completeTrue' : 'completeFalse'}
                    dangerouslySetInnerHTML={{__html:name}}
                >
                </span>
                <span
                    className="itemTag"
                    style={{display:tagDone? 'block' : 'none'}}
                >
                    {tag}
                </span>
                <button
                    className="itemBtn"
                    style={{display:this.state.mouse ? 'block' : 'none'}}
                    onClick={this.itemDelete(id,grouping)}
                >
                    删除
                </button>
            </li>
        );
    }
    // 当鼠标在li上时,显示删除按钮
    itemMouse(flag){
        return () => {
            this.setState({
                mouse:flag
            })
        }
    }
    // 点击按钮,回调父组件的函数重新将id和完成状态的值传回父组件
    itemClick(id,done){
        return () => {
            this.props.toggleDoneItem(id,!done);
        }
    }
    // 点击按钮,回调父组件的函数重新将id和分组列表传回父组件
    itemDelete(id,grouping){
        return() =>{
            console.log(id,grouping);
            this.props.deleteList(id,grouping);
        }
    }
}

export default Item;