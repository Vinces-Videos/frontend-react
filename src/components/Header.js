import PropTypes from 'prop-types'
import logo from '../logo.png'

//Content for the header, we pass in a modal for the login. This needs to be controlled at the top level so it can overlay all other content on the page
const Header = ({loginModal}) => {
  return (
    <header>
        <img className='logo' src={logo} alt='Vinces Videos Logo'></img>
        <div className = 'header-right'>
          <button className='login-button' onClick={() => {loginModal(true)}}>Login</button>
        </div>
    </header>
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