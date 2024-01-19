import React, { useState } from "react";
import { TodoData } from "./TodoData";
import '../App.css';

function Sidebar({ displayActiveElement }) {
    const [todoItems, setItems] = useState(TodoData);
    const [activeId, setActiveId] = useState("");

    function handleClick(item) {
        displayActiveElement(item.additionalDetails);
        setActiveId(item.id);
    }

    const removeToDoItem = (event, id) => {
        event.stopPropagation();
        const updatedList = todoItems.filter((item) => item.id !== id);
        setItems(updatedList);
        displayActiveElement("");
    };

    return (
        <div>
            <div className="Sidebar">
                <ul class="SidebarList">
                    {todoItems.map((item, key) => {
                        return <li className={item.id === activeId ? 'row active' : 'row'} key={key} onClick={() => handleClick(item)}>
                            {item.heading}
                            <button
                                className='delete-button'
                                onClick={(event) => removeToDoItem(event, item.id)}>
                                X
                            </button>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;