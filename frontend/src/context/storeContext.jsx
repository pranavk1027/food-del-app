import { createContext, useEffect, useState } from "react";
 import axios from "axios"

export const StoreContext=createContext(null);


const StoreContextProvider=(props)=>{
    const [cartItems,setCartItems]=useState({});

    const url=`http://localhost:4000`

    //create a state variable to store the token
    const [token,settoken]=useState("");


//upar meine food_list hi import kiya h asset se toh ab
//DB se mangwa rha huin toh yehi name use krunga

const [food_list,setFoodList]=useState([]);




const addToCart=async(itemId)=>{
      if(!cartItems[itemId]){   //ading for the first time
          setCartItems((prev)=>({...prev,[itemId]:1}))
      }
      else {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
      }
      if(token){
        await axios.post (url+"/api/cart/add",{itemId},{headers:{token}})
      }
}

const removeFromCart=async(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    if(token){
        await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
    }
}

  const getTotalCartAmount=()=>{
    let totalAmount=0;
    for(const item in cartItems){
   if(cartItems[item]>0){
    let itemInfo=food_list.find((product)=>product._id===item);
    totalAmount+=itemInfo.price* cartItems[item];
   
}

       
    }
    return totalAmount;
  }
 //Db se data
 const fetchFoodList =async()=>{
    const response=await axios.get(url+"/api/food/list")
    setFoodList(response.data.data)
    console.log(response)
 }


 //ye isliye taki jab reload kro tab bhi dikhaye ki cart mein ye particular item kitna added hai
const loadCartData =async (token)=>{
    const response =await axios.post(url+"/api/cart/get",{},{headers:{token}})
         setCartItems(response.data.cartData);
}



 //ye isliye kyuki hum jab refresh krte hain toh logout ho jate hain
 useEffect(()=>{
    
    async function loadData() {
        await fetchFoodList()
    
    if(localStorage.getItem("token")){
        settoken(localStorage.getItem("token"))
        //cart load krne ke liye
        await loadCartData(localStorage.getItem("token"))
    }
    }
    loadData();
 },[])
 
  

    const contextValue={
food_list,
cartItems,
setCartItems,
addToCart,
removeFromCart,
getTotalCartAmount,
token,settoken,
url,
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}


export default StoreContextProvider;