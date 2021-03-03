import React from "react";

const ChirperItem = (props) => {
    return (
        <div>
            <li className="list-group-item">
                {props.chirper.message}
            </li>
        </div>
    );
};

export default ChirperItem;