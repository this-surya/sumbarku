'use client'


import { Product } from "@/features/product";
import { useEffect, useState } from "react";

export default function Page(){
    const [cart, setCart] = useState([])
    const [produtId, setProductId] = useState()

    useEffect(() => {
        async function getCart(){
            try{
                const result = await Product("carts")
                setCart(result);
            }catch(e){
                console.log(e)
            }
        }

        getCart()
    },[])


  


    console.log(cart)


    return cart.map((item) => {
        return(
            <div className="w-full bg-gray-200">
              <h1 className="font-bold text-xl">{item.date.slice(0,10)}</h1>



              {item.products.map((product) => {
                return(

                    <div className=" mx-10 p-3">

                        {product && 

                            <ShowProductDtl productId={product.productId}  quantity={product.quantity}/>
                        
                        }

                    </div>

                )
              })}
            </div>
        )
    })
}


function ShowProductDtl({productId, quantity}){
    const [productDtl, setProductDtl] =  useState([]);



    useEffect(() => {
        async function getProdutDtl(){
            try{
                const result = await Product(`products/${productId}`)
                setProductDtl(result)
            }catch(e){
                console.log(e)
            }
        }

        getProdutDtl()
    }, [productId])


    return(
        <div className="flex  bg-gray-900 text-white">
            <img src={productDtl.image} width={100} height={100}/>
            <div className="flex ml-10 flex-col justify-center">
                <p>{productDtl.title} </p>
                <p>${productDtl.price}</p>
                <p>Total: {quantity}</p>
                <p>Price: {productDtl.price * quantity }</p>
            </div>
        </div>
    )   
}