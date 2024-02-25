import { memo } from "react";

function Box(props  ) {
    const { onCounter, onReset } = props;
 
    const handleCounter = () => {
        onCounter();
    }

    const handleReset = () => {
        onReset();
    }
    console.log("render box");

    return(
        <>
             <button onClick = {handleCounter}>Counter</button>
             <button onClick = {handleReset}>Reset</button>
        </>
    )
}
export default memo(Box);