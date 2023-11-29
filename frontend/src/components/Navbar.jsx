import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <div className="navbar-container">
                <Link to='/'>
                    <h3>Home</h3>
                </Link>
                <Link to='/cats'>
                    <h3>Cat Buddy</h3>
                </Link>
            </div>
        </header>
    )
}

export default Navbar