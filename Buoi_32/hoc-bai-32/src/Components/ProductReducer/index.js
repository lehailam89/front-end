
import { useReducer, useEffect } from "react";

const init = {
    products: [],   
    loading: true,
};
const reducer = (state, action) => {
    console.log(action.type);
    if(action.type === "SUCCESS"){
        return{
            products: action.products,
            loading: false
        };
    } else {
        return state;
    }
}

function ProductReducer(){
    // const [products, setProducts] = useState([]);
    // const [loading, setLoading] = useState(true);
    const [data, dispath] = useReducer(reducer, init);


    useEffect(() => {
        
        const fetchApi = () => {
            fetch(`https://dummyjson.com/products`)
                .then(res => res.json())
                .then(data => {
                    dispath({
                        type: "SUCCESS",
                        products: data.products
                    });
                
                })
        }
        setTimeout(() => {
            fetchApi();
        }, 1000);
        
    }, [])

    console.log(data);

    return(
        <>
           {data.loading ? (
            <div>Đang tải dữ liệu...</div>
           ) : (
            <ul>
                 {data.products.map(item => (
                  <li key={item.id}>
                    {item.title}
                  </li>
            ))}
            </ul>
           )

           }
        </>
    )
}
export default ProductReducer;