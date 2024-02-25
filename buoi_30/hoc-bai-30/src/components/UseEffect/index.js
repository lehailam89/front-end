import { useEffect } from "react";
function UseEffect() {
    

    useEffect(() => {
        let listItem = document.querySelectorAll("ul li");
        console.log(listItem);
    });

    return(
        <>
            <ul>
                <li>Mục 1</li>
                <li>Mục 2</li>
                <li>Mục 3</li>
            </ul>
        </>
    )
}
export default UseEffect;