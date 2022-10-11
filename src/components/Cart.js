import { useCart } from '../context/cart-context'

const Cart = () => {
    const cartContext = useCart();
    console.log(cartContext);

    return (
        <>
            <h4>This is my cart modal</h4>
            <h4>There are {cartContext.length} items in the cart</h4>
        </>
    );
}

export default Cart