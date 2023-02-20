import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <header className="header">
                <div className="logo">
                    <NavLink to="/"><img src="./images/logo.png" alt="" /></NavLink>
                </div>
                <div className="pages scale-up-ver-top">
                    <div className="list">
                        <NavLink to="/"> Home </NavLink>
                        <NavLink to="/about"> Products </NavLink>
                        <NavLink to="/review"> Review </NavLink>
                        <NavLink to="/contact"> Contact Us</NavLink>
                    </div>
                </div>
                <div className="acount">
                    {/* <ion-icon name="person-circle"></ion-icon> */}
                    <img src="./images/m1.jpg" alt="" className='userimg'/>
                </div>
            </header>

        </>
    )
}

export default Nav;
