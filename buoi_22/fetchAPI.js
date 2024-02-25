import { fetchApi } from "./helpers/fetchApi.js";

// const fetchApi = (url) => {
//     const result = fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         return data;
//     });
//     return result;
// }


// Get category
fetchApi("http://localhost:3000/categories")
    .then(data => {
        let htmls = "";
        data.forEach(item => {
            htmls += `
            <div class="product-item">${item}</div>
            `
        });
        console.log(htmls);
        const divCategory = document.querySelector("#category");
        divCategory.innerHTML = htmls;
    });

//End get category

//get product
fetchApi("http://localhost:3000/products")
    .then(data => {
        console.log(data.products);
    let htmls = "";
    data.forEach(item => {
        htmls += `
        <div class="product-item">
            <img src="${item.thumbnail}" alt="${item.title}"/>
            <h3>${item.title}</h3>
            <p>${item.price}</p>
        </div>
        `;
    });
    const divProducts = document.querySelector("#products");
    divProducts.innerHTML = htmls;
    });

//end get product

//Async Await
