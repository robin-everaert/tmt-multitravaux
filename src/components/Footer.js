import logo from '../assets/images/logo.png';
import SiteBar from '../common/SiteBar';

const Footer = () => {
    return (
        <footer id='footer' className='pt-4 pb-4'>
            <div className="logo-header-container d-flex justify-content-center align-items-center p-3">
                <img src={ logo } className='logo' alt="Le logo de TMT Multitravaux" />
            </div>

            <div className="sitebar-container mt-2 mt-md-4">
                <SiteBar />
            </div>

        </footer>
    );
};

export default Footer;