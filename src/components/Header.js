import PropTypes from 'prop-types'
import { useCart } from '../context/cart-context'

//Content for the header, we pass in a modal for the login. This needs to be controlled at the top level so it can overlay all other content on the page
const Header = ({loginModal}) => {
  const cart = useCart();
  return (
    <div className='header'>
        <h1 className='logo'>Vinces Videos</h1>
        <div className = 'header-right'>
          <button className='login-button' onClick={() => {loginModal(true)}}>Cart {`foo`}</button>
        </div>
    </div>
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