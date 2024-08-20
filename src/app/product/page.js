'use client'

import Link from "next/link"
import { Product } from "@/features/product"
import { useEffect, useState } from "react";
import SideBar from "@/components/sidebar";

export default function Page(){

   const [getProduct, setProduct] = useState([])
   const [isLoading, setIsLoading] = useState(true);
   
   useEffect(() => {
      async function productRes(){
         setIsLoading(true)
         try{
            const barang = await Product('products');
            setProduct(barang);
            setIsLoading(false)
         }catch(e){
            console.log(e)
         }
      }

      productRes()
   }, [])

      console.log(getProduct)
    return(
        <div className="md:flex-row flex flex-col">
            <SideBar />
            <div className="bg-gray-200 text-white w-full">
               {/* <Carousel /> */}
               <div className="flex flex-wrap justify-center ">
                  {isLoading && <h1>Loading</h1>}

                  {getProduct.map((item, index) => {
                     return(
                        
                        <CardProductSM id={item.id} key={index} pic={item.image} title={item.title} price={item.price}/>
                     )
                     
                  })}

               </div>

            </div>
        </div>
    )
}

function Carousel(){
   return(
      <div className="w-full relative bg-red-900 h-96 p-2 mb-5">
         <div className="relative flex flex-row overflow-x-auto">
            <div className="w-full snap-center">
               <img className="h-96 w-full" src="minangkabau.webp" />
            </div>
            <div className="w-full snap-center">
               <img className="h-96 w-full" src="minangkabau.webp" />
            </div>
            <div className="w-full snap-center">
               <img className="h-96 w-full" src="minangkabau.webp" />
            </div>
            <div className="w-full snap-center">
               <img className="h-96 w-full" src="minangkabau.webp" />
            </div>
         </div>
      </div>
   )
}

function ProductCardLG(){
   return(
      <a href="#" class="flex flex-col h-80 m-5 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://i.pinimg.com/736x/83/a0/c7/83a0c70891382721468d47d6c63b5487.jpg" alt="" />
      <div class="flex flex-col justify-between p-4 leading-normal">
         <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
         <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
      </div>
   </a>
   )
}

function CardProductSM({id, pic, key, title, price}){
   return( 
      <Link href={`/${id}`}>
      <div key={key} className=" rounded-t-xl m-1 md:w-[15rem] w-[11rem] pt-4 md:pt-0 h-[20rem] bg-gray-800 flex flex-col justify-center">
         <div className="overflow-hidden">
         <img className=" md:w-full h-[15rem]  mx-auto hover:scale-105 transition ease-out" src={pic} />
         </div>
         <div className="p-2">
            <h1 className="text-sm font-bold text-white truncate">{title}</h1>
            <div className="flex py-3 justify-between">
               <p className="text-gray-400">${price}</p>
               <button className="bg-gray-500 p-2 rounded hover:bg-white hover:text-black">keranjang</button>
            </div>
         </div>
      </div>
      </Link> 
   )
}
function Title({title }){
   return(
      <h1 className="bg-gray-800 w-full  flex  text-2xl font-bold items-center justify-center py-2 border-2 border-gray-600 border-b-blue-500">{title}</h1>
   )
}