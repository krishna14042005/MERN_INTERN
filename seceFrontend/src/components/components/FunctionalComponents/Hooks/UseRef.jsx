import { useEffect, useRef, useState } from "react";
const UseRef = () => {
    var [text, setText] = useState("");
    var prevRender = useRef();
    useEffect(()=>{
        console.log(text)
        prevRender.current = text
    })

    return (
        <div>
            <h2>This page is ment for UseRef Hook</h2>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <h4>The text is {text}</h4>
            <h5>The previous Render text is {prevRender.current}</h5>
        </div>
    )
}
export default UseRef;