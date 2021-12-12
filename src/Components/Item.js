import React, {Component} from 'react';
import "../css/Item.css";

class Item extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li>
                <svg
                    t="1639238384140"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="2609"
                >
                    <path
                        d="M741.216 344a32 32 0 0 1 46.816 43.616l-315.296 338.208a32 32 0 0 1-43.968 2.688l-193.344-162.368a32 32 0 1 1 41.152-48.992l170.08 142.816 294.56-316z"
                        p-id="4886"
                        fill= '#fff'
                    >
                    </path>
                </svg>
                <span></span>
                <span></span>
                <button>
                    删除
                </button>
            </li>
        );
    }
}

export default Item;