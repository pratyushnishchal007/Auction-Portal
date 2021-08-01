import React ,{useContext} from 'react'
import { AuthContext } from './context/AuthContext.js'
import Login from './Login.jsx'
import Register from './Register.jsx'

const Nav = () => {
    const {currentUser,logout} = useContext(AuthContext)
    return (
<nav className="container navbar sticky-top navbar-light bg-light">
    <div className="container-fluid">
        <a className="navbar-brand" href="#">Auction</a>
            <div className="d-flex">
                <div className="col">
                {currentUser ? (
                    <>
                    <div className="btn btn-outline-secondary mx-2 disabled">
                    {currentUser.email}
                    </div>
                    <div
                  onClick={() => logout()}
                  className="btn btn-outline-secondary mx-2">Logout</div>

                    </>
                ) : (
                    <>
                    <Login />
                    <Register />
                    </>
                    )}
                </div>
            </div>
    </div>
</nav>
    )
}
export default Nav;
