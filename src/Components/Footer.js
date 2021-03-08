import PropTypes from 'prop-types'

const Footer = () => {
    return (
        <footer>
            <p> Copyright &copy; {new Date().getFullYear()}, Matthew Dwinell</p>
            <a href = '/about'>About</a>
        </footer>
    )
}

Footer.propTypes = {

}

export default Footer
