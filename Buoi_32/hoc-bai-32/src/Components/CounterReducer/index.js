import { useReducer } from "react";

const reducer = (state, action) => {
    //action UP, DOWN, RESET
    console.log(state, action);
    switch (action) {
        case "UP":
            return state + 1;
        case "DOWN":
            return state - 1; 
        case "RESET":
            return 0;
        default: 
            return state;
    } 
}

function CounterReducer(){
    const [counter, dispath] = useReducer(reducer, 0);
    
    return(
        <>
            <div>Kết quả: {counter}</div>
            <button onClick={() => dispath("UP") }>Up</button>
            <button onClick={() => dispath("DOWN")}>Down</button>
            <button onClick={() => dispath("RESET")}>Reset</button>
        </>
    )
}
export default CounterReducer;