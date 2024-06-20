import { useState, useCallback, useMemo } from "react";
import { pow } from "../../helpers/pow";

function Counter() {
    const [counter, setCounter] = useState(0);
    

    const handleCounter = useCallback(() => {
        setCounter(counter => counter + 1);    
    }, []);

//    const resultPow = pow();
    const resultPow = useMemo(() => {
        pow();
    }, []);

    return( 
        <>
            
            <div>Kết quả: {counter}</div>
            <button onClick={handleCounter}>Counter</button>
            <div>{resultPow}</div>
        </>
    )
}
export default Counter;