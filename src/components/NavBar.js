import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        // <nav className="main-navBar">
        //     
        //     
        //     
        //     
        //     
        //     
        //     
        //     
        // </nav>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
        <li class="nav-item active">
            <Link to="/home" className='btn btn-nav'>Qui sommes-nous ?</Link>
        </li>
        <li class="nav-item">
            <Link to="/electricite" className='btn btn-nav'>Électricité</Link> 
        </li>
        <li class="nav-item">
            <Link to="/plomberie" className='btn btn-nav'>Plomberie</Link>
        </li>
        <li class="nav-item">
            <Link to="/carrelage" className='btn btn-nav'>Carrelage</Link>
        </li>
        <li class="nav-item">
            <Link to="/peinture" className='btn btn-nav'>Peinture & placoplatre</Link>
        </li>
        <li class="nav-item">
            <Link to="/salle-de-bain" className='btn btn-nav'>Aménagement salle de bains</Link>
        </li>
        <li class="nav-item">
            <Link to="/cuisine" className='btn btn-nav'>Aménagement cuisine</Link>
        </li>
        <li class="nav-item">
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