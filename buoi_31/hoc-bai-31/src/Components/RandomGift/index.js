import { useState, useRef } from "react"; 

function RandomGift() {
    const gifts = ["Smart Phone", "MacBook", "Motorbike", "Lamborgini", "Rolex", "1.000.000$", "Rolls Royce"]
    const [result, setResult] = useState(""); 
    const counterRef = useRef(0);

    const handleRandom = () => {
        if(counterRef.current < 6){
            const random = Math.floor(Math.random()*gifts.length);
            setResult(gifts[random]);
            counterRef.current = counterRef.current + 1;
        }else{
            alert("Bạn đã hết lượt quay!"); 
        }
       
    }
    console.log(counterRef);
    return(
        <>
            <button onClick={handleRandom}>Random</button>
            <div>Bạn đã trúng thưởng: {result}</div>
        </>
    ) 
} 
export default RandomGift;