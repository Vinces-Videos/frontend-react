import { React } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { useCart } from '../context/cart-context'
import '../styles/Header.css'

//Content for the header, we pass in a modal object. This needs to be controlled at the top level so it can overlay all other content on the page
const Header = ({modal}) => {
  const cart = useCart();
  return (
    <nav className='nav'>
        <a href='/'>
          <h1 className='logo'>Vinces Videos</h1>
        </a>
          <ul>
            <li>
              <Link to='/staff'>Staff Area</Link>
            </li>
            <li onClick={() => {modal(true)}}>
              <a>Cart ({cart.length})</a>
            </li>
          </ul>
    </nav>
  )
}

Header.defaultProps = {
    title: 'No Header'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

//CSS in JS
/*
const headerStyle = {
    color: 'red',
    backgroundColor: 'black'
}
*/

export default Header