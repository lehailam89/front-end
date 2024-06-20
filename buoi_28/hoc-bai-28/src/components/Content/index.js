function Content(props) {
    const {text, number, active } = props;

    // console.log(props);
    // console.log(props.text)

    let classActive = "";
    if(active) {
        classActive = "box--active";
    }

    return ( 
        <>
            <div className={"box " + classActive}>
                {text} - {number}
            </div>
        </>
    )
}
export default Content; 