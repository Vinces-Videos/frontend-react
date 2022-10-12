import { useCart } from '../context/cart-context'

const Cart = () => {
    const cart = useCart();

    //Create a new array which contains a cart item div
    return (
        <div className='cart-inner-container'>
        {cart.map((item, index) => (
            <p key={index}>{item.name} - {item.id}</p>
        ))}
    </div>
    );
}

export default Cart