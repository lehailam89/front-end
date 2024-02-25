import { useState } from "react";

function Lamp(){
    // let status = true;
    const [status, setState] = useState(false);

    const handleClick = () => {
        // status = !status;
        setState(!status);
    }

    console.log(status);

    
    return (
        <>
             <button onClick={handleClick}>
            {status ? "Tắt đi" : "Bật lên"} 
            </button>
            <div>
            {status ? "Đèn đang bật" : "Đèn đang tắt"}
            </div>
            
        </>
    )
}
export default Lamp;