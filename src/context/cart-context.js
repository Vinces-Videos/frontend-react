import React, {useContext, useState} from "react";

const CartContext = React.createContext();
const CartUpdateContext = React.createContext();

//Exposes the cart, can be used to query cart items
export function useCart(){
    return useContext(CartContext);
}

//Exposes the cart update method, can be used to update the cart
export function useCartUpdate(){
    return useContext(CartUpdateContext);
}

//Context is like a global variable. In our case we want to access the cart from whereever we are in the application.
//This prevents 'props drilling' where we have to pass props down to multiple nested objects
export default function CartProvider({children}){
    const [cart, setCart] = useState([]);

    //Appends an item to the cart if it's not already in there
    function updateCart(item){
        const index = cart.findIndex(x => x === item);

        if (index !== -1)
        {
            cart[index].cartQty = cart[index].cartQty +1 || 2;
        }
        else
        {
            console.log(`Updated the cart with ${item.name}`);
            //Add's a new item to the array using the proper setCart react hook, without doing this react wouldn't know the object has been updated
            setCart(prevArr => [...prevArr, item]);
        }
        console.log(cart);
        console.log(`${itemCount()} items in the cart`)
    }

    //Cart length isn't just the size of the array, quantities of each item also need to be added up
    function itemCount(){
        return cart.reduce((previousValue, currentValue) => currentValue.cartQty ? previousValue + currentValue.cartQty : previousValue + 1, 0);
    }

    //Uses the children as props passed to the function to render dependents
    return (
      <CartContext.Provider value={cart}>
        <CartUpdateContext.Provider value={updateCart}>
            {children}
        </CartUpdateContext.Provider>
      </CartContext.Provider>  
    );
}