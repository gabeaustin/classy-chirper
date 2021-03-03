import React from "react";

const ChirperItem = (props) => {
    return (
        <div>
            <li className="list-group-item">
                {props.chirper.message}
                {props.chirper.author}
            </li>
        </div>
    );
};

export default ChirperItem;