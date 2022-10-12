import "../styles/Cart.css";
import { useCart, useCartRemove } from '../context/cart-context'

const Cart = () => {
    const cart = useCart();
    const cartRemove = useCartRemove();

    //Create a new array which contains a cart item div
    return(
        <div className='cart-inner-container'>
        {cart.map((item, index) => (
            <div className='cart-item' key={index}>
                <p>{item.name} - {item.id}</p>
                <button onClick={() => {cartRemove(index)}}>Delete</button>
            </div>
        ))}
    </div>
    );
}

export default Cart