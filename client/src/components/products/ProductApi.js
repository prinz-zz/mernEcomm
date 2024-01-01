

export const fetchAllProducts = () =>{
    return new Promise(async (resolve)=>{
        const response = await fetch("http://localhost:4444/products")
        const data = await response.json()
        resolve({data})
    });
}

export const fetchProductsByFilters = (filter) =>{
    //filter = {"brand":"Apple"}
    let queryString = "";
    for(let key in filter){
        queryString += `${key}=${filter[key]}&`
    }

    return new Promise(async (resolve)=>{
        const response = await fetch("http://localhost:4444/products?"+queryString)
        const data = await response.json()
        resolve({data})
    });
}