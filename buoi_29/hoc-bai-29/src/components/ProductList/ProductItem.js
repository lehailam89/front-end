
function ProductItem(props) {
    const { item } = props;
    return (
        <>
            <div className="product__item" >
                    <img className="product__image" src={item.image} alt={item.name} style={{width: "200px", height: "200px"}}/>
                    <h3 className="product__name">{item.name}</h3>
                    <p className="product__price">Gía: {item.price}</p>
            </div>
        </>
    )
}

export default ProductItem;