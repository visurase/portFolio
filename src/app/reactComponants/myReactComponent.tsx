import * as React from "react";

import { useState } from "react";

const MyReactComponet=()=>{

    const [text,setText]  = useState('');
    //useEffect

    const onClick = ()=>{
        setText('Hi vishal This is React ')
    }

    return (
        <div>
            {text}
        <br/>
        <button
        onClick={onClick}>
            load React
        </button>
        </div>
    )
}

export default MyReactComponet;