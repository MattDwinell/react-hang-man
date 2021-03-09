import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {useLocation} from 'react-router-dom'
const Footer = () => {
    const location = useLocation()
    return (
        <footer>
            <Link className='styled-link' to={`/${location.pathname === '/' ? 'about' : ''}`}>{location.pathname === '/' ? 'About' : 'Mainpage'}</Link>
            <p> Copyright &copy; {new Date().getFullYear()}, Matthew Dwinell</p>
        </footer>
    )
}

Footer.propTypes = {

}

export default Footer
