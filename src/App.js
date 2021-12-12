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
                {id: '1学习React技术', name: '学习React技术', done: true, grouping: '未分组'},
                {id: '2学习后端API', name: '学习后端API', done: false, grouping: '未分组'},
                {id: '3完成任务列表', name: '完成任务列表', done: false, grouping: '明天'},
                {id: '4完成删除任务', name: '完成删除任务', done: false, grouping: '明天'},
                {id: '5完成搜索任务', name: '完成搜索任务', done: false, grouping: '明天'},
                {id: '6完成任务分租', name: '完成任务分租', done: false, grouping: '明天'},
                {id: '7完成任务打标签', name: '完成任务打标签', done: false, grouping: '明天'},
            ],
            group:['未分组','明天'],
        }
        this.addItem = this.addItem.bind(this)
        this.toggleDoneItem = this.toggleDoneItem.bind(this)
        this.deleteList = this.deleteList.bind(this)
        this.search = this.search.bind(this)
    }
    render() {
        const {list,group} = this.state;
        return(
            <div className="box">
                <SearchTask
                    search={this.search}
                />
                <div className="boxList">
                    {
                        group.map( item => {
                            return (
                                <List
                                    key={item}
                                    groupName = {item}
                                    list = {list}
                                    toggleDoneItem = {this.toggleDoneItem}
                                    deleteList = {this.deleteList}
                                />
                            )
                        })
                    }
                </div>
                <NewTask
                    addItem={this.addItem}
                    len = {list.length}
                />
                <TaskSituation
                    list = {list}
                />
            </div>
        );
    }
    // 增加list中的item,实现与List组件的通信
    addItem(listObj){
        // 获取list
        const {list,group} = this.state;
        // 将list与接受参数进行组合并新建一个
        const newList = [...list,listObj];
        //判定当前group里是否已有组别存在，存在就不采取更新
        const newGrouping = group.includes(listObj.grouping) ? [...group] : [...group,listObj.grouping];
        console.log(listObj);
        // 数据更新
        this.setState({
            list:newList,
            group:newGrouping
        })
    }
    // 改变list.done的状态，实现与List组件的通信
    toggleDoneItem(id,done){
        const {list} = this.state;
        const newListObj = list.map((listObj) => {
            if(listObj.id === id)
                return {...listObj,done}
            else
                return listObj
        })
        this.setState({
            list:newListObj
        })
    }
    // 删除选中的item
    deleteList(id,grouping){
        const {list} = this.state;
        // 过滤掉从List传回来的id,实现删除功能
        const newListObj = list.filter((listObj) => {
            return listObj.id !== id
        })
        // 获取list里同组别的数量
        const newGroupObj= list.filter(groupObj => groupObj.grouping === grouping).length - 1;
        // 当list中的同组别的数量为0时,清除group中的组别名,实现删除组别的功能
        if (newGroupObj === 0){
            console.log(this.state.group.splice(this.state.group.indexOf(grouping),1));
        }

        this.setState({
            list:newListObj,
            group:this.state.group
        })
    }

    search(Value){
        console.log(Value);
        const {list} = this.state;
        // 将要搜索的内容进行遍历查询
        list.filter(valueItem => valueItem.name.indexOf(Value) !== -1)
            .map(v => {
                let re = new RegExp(Value,"g");
                return (
                    // 通过正则给要搜索的内容套个svg标签
                    v.name = v.name.replace(re,`<span class="keyHigh">${Value}</span>`),
                        console.log(v),
                        // 数据更新
                        this.setState({
                            list:[...list]
                        })
                )
            })

        // 一个问题,当搜索内容时,只能搜索一次,第二次的时候,第一次的标签还存在
    }
}
export default App;