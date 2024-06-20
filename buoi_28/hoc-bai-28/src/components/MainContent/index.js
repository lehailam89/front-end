import { BsFacebook } from "react-icons/bs";
import { FaBattleNet } from "react-icons/fa";
function MainContent() {
    let name = "Lê Hải Lâm";
    const css = {
    //   color: "Red",
    //   background: "blue",
    };
    return (
        <>
        <div className="box">
            <div className="test" style={css}>
                xin chào {name}
            </div>
            <div className="test" style={css}>
                xin chào {name}
            </div>
            <BsFacebook style={{fontSize: "50px"}}/>
            <FaBattleNet className="icon" />
        </div>
        </>
    )
}
export default MainContent;