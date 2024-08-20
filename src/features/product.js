import axios from "axios"




export const Product = async (url) =>{
    const res = await fetch(`https://fakestoreapi.com/${url}`);
    if(!res.ok){
        console.log('failed')
    }

    return res.json()
}