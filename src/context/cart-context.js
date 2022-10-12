import React, {useContext, useReducer} from "react";

const ACTIONS = {
    ADD: 'add',
    REMOVE: 'remove'
};

const CartContext = React.createContext();
const CartUpdateContext = React.createContext();
const CartRemoveContext = React.createContext();

//Exposes the cart, can be used to query cart items
export function useCart(){
    return useContext(CartContext);
}

//Exposes the cart update method, can be used to update the cart
export function useCartUpdate(){
    return useContext(CartUpdateContext);
}

export function useCartRemove(){
    return useContext(CartRemoveContext);
}

//Returns new updated state based on the action
function reducer(cart, action){
    switch(action.type)
    {
        case ACTIONS.ADD:
            return [...cart, action.payload];
        case ACTIONS.REMOVE:
            //Return a new version of cart which removes the specified index
            return cart.filter((item, index) => index !== action.payload);
        default:
            return cart;
    }   
}

//Context is like a global variable. In our case we want to access the cart from whereever we are in the application.
//This prevents 'props drilling' where we have to pass props down to multiple nested objects
export default function CartProvider({children}){
    //reducerCart is a new empty array, this will become an array of movies
    const [cart, dispatch] = useReducer(reducer, []);
    console.log(cart);

    function handleCartUpdate(item){
        dispatch({type: ACTIONS.ADD, payload: item});
    }

    function handleCartRemove(index){
        dispatch({type: ACTIONS.REMOVE, payload: index});
    }

    //Uses the children as props passed to the function to render dependents
    return (
      <CartContext.Provider value={cart}>
        <CartUpdateContext.Provider value={handleCartUpdate}>
            <CartRemoveContext.Provider value={handleCartRemove}>
                {children}
            </CartRemoveContext.Provider>
        </CartUpdateContext.Provider>
      </CartContext.Provider>  
    );
}