import { Link } from 'react-router-dom';

const NavBar = () => {

    // active Link: 
        const navLinks = document.querySelectorAll('.nav-item');

        navLinks.forEach(link => {
            link.addEventListener('click', function() {
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');
            });
        });

    return (
        <nav id="navBar" className="navbar navbar-expand-sm mt-3 mt-md-3">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-sm-flex justify-content-center" id="navbarNav">
            <ul className="navbar-nav w-100 d-flex justify-content-md-center flex-wrap">
                <li className="nav-item active">
                    <Link to="/home" className='btn btn-nav'>Qui sommes-nous ?</Link>
                </li>
                <li className="nav-item">
                    <Link to="/electricite" className='btn btn-nav'>Électricité</Link> 
                </li>
                <li className="nav-item">
                    <Link to="/plomberie" className='btn btn-nav'>Plomberie</Link>
                </li>
                <li className="nav-item">
                    <Link to="/carrelage" className='btn btn-nav'>Carrelage</Link>
                </li>
                <li className="nav-item">
                    <Link to="/peinture" className='btn btn-nav'>Peinture & placoplatre</Link>
                </li>
                <li className="nav-item">
                    <Link to="/salle-de-bain" className='btn btn-nav'>Aménagement salle de bains</Link>
                </li>
                <li className="nav-item">
                    <Link to="/cuisine" className='btn btn-nav'>Aménagement cuisine</Link>
                </li>
                <li className="nav-item">
                    <Link to="/depannage" className='btn btn-nav'>Dépannage</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className='btn btn-nav'>Contact</Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    );
};

export default NavBar;