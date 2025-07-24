import {useEffect,useState} from "react";

function useCurrencyInfo(currency){
   const [data,setData]=useState({});
   useEffect(()=>{
   fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
   .then((response) => response.json())
   .then((response)=>setData(response[currency]))
   console.log(data);
   
},[currency]) 
   console.log(data);
   return data;   
}
export default useCurrencyInfo;
//
//hooks majority javascript return krty hain
//use strandard approach hai hooks hai marzi hai na kro 
//useEffect sy attomatically fetch call ho jaye ga