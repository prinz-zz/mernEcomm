

export const fetchAllProducts = () =>{
    return new Promise(async (resolve)=>{
        const response = await fetch("http://localhost:4444/products")
        const data = await response.json()
        resolve({data})
    });
}

export const fetchProductsByFilters = (filter, sort, pagination) =>{
    //filter = {"category" :["smartphones",""laptops"]}
    //sort = {_sort: "price", _order: "desc"}
    //pagination = {_page:1,_limit:10} _page=1&_limit=10
    let queryString = "";

    for(let key in filter){
        const categoryValues = filter[key];
        if(categoryValues.length){
            //const lastCategoryValue = categoryValues[categoryValue.length - 1];
            queryString += `${key}=${categoryValues}&`
        }       
    }    

    for(let key in sort){
        queryString += `${key}=${sort[key]}&`
    }

    for(let key in pagination){
        queryString += `${key}=${sort[key]}&`
    }

    return new Promise(async (resolve)=>{
        const response = await fetch("http://localhost:4444/products?"+queryString)
        const data = await response.json()
        resolve({data})
    });
}