import logo from '../assets/images/logo.png';



import NavBar from "../common/NavBar";
import SiteBar from '../common/SiteBar';

const Header = () => {
    return (
        <header id='header'>
            <div className="sitebar-container d-flex flex-column flex-md-row justify-content-around align-items-center">

            <div className="logo-header-container d-flex justify-content-center align-items-center p-3">
                <img src={ logo } className='logo' alt="Le logo de TMT Multitravaux" />
            </div>


            <SiteBar />

            </div>

            <NavBar />
        </header>
    );
};

export default Header;