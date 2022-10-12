import React, {useContext, useReducer} from "react";

const ACTIONS = {
    ADD: 'add',
    REMOVE: 'remove'
};

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

//Returns new updated state based on the action
function reducer(cart, action){
    switch(action.type)
    {
        case ACTIONS.ADD:
            return [...cart, action.payload];
        case ACTIONS.REMOVE:
            break;
        default:
            return cart;
    }   
}

//Context is like a global variable. In our case we want to access the cart from whereever we are in the application.
//This prevents 'props drilling' where we have to pass props down to multiple nested objects
export default function CartProvider({children}){
    //reducerCart is a new empty array, this will become an array of movies
    const [cart, dispatch] = useReducer(reducer, []);
    console.log("Current cart", cart);

    function handleAddToCart(item){
        dispatch({type: ACTIONS.ADD, payload: item});
    }

    //Cart length isn't just the size of the array, quantities of each item also need to be added up
    function itemCount(){
        return cart.reduce((previousValue, currentValue) => currentValue.cartQty ? previousValue + currentValue.cartQty : previousValue + 1, 0);
    }

    //Uses the children as props passed to the function to render dependents
    return (
      <CartContext.Provider value={cart}>
        <CartUpdateContext.Provider value={handleAddToCart}>
            {children}
        </CartUpdateContext.Provider>
      </CartContext.Provider>  
    );
}