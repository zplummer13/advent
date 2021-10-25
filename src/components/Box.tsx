import React from "react";

type BoxProps = {
    id: number;
}

export function Box(props: BoxProps) {

    return(
        <aside>
            <h2>Box: {props.id}</h2>
        </aside>
    );
}