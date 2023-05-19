// Images : 
import guarantie from "../../assets/images/garantie-decennale.png";
import CardServiceHome from "../../common/CardServiceHome";

const Home = () => {

    return (
      <main id="main">
        <section className="container">

          {/* Txt top */}
          <div className="row">
            <div className="col-12 presentation-container">
              <h1 className='m-4 m-md-5'>Qui sommes-nous ?</h1>
              <p>
                TMT Multi Travaux est une entreprise individuelle de multi travaux crée par Tarkou Mohamed, pour répondre à la demande des entreprises comme des particuliers Parcoures de Mohamed Tarkou
              </p>
              <p>
                Après avoir réussi son CAP d’électricien de bâtiment en 2001 au Maroc, Mohamed Tarkou y a travaillé pour différentes entreprises et pour différents corps de métier : électricité, plomberie, installation de paraboles et de caméras de surveillance, peinture, maçonnerie…
              </p>
              <p>
                En 2010, Mohamed a choisi d’explorer un nouvel univers et a ainsi intégrer l’association internationale UCPA, référente dans le domaine sportif et éducatif à l’international, pour le site du Play Park Malabata de Tanger. Durant 3 ans, avec énergie et passion, il a porté et contribué au développement de ce projet, d’abord comme moniteur sportif, puis très rapidement comme directeur et coordinateur régional.En 2010, Mohamed a choisi d’explorer un nouvel univers et a ainsi intégrer l’association internationale UCPA, référente dans le domaine sportif et éducatif à l’international, pour le site du Play Park Malabata de Tanger. Durant 3 ans, avec énergie et passion, il a porté et contribué au développement de ce projet, d’abord comme moniteur sportif, puis très rapidement comme directeur et coordinateur régional.
              </p>
              <p>
                Après cette belle parenthèse et fort de ses expériences précédentes, Mohamed a choisi de retourner dans le domaine du bâtiment, dans sa ville natale de Larache, comme artisan indépendant, tout en créant en parallèle une association pour les enfants des quartiers défavorisés.
              </p>
              <p>
                En 2015, Mohamed est arrivé en France pour rejoindre son épouse et a commencé à travailler pour l’entreprise ALCAZAR comme électricien, avant d’intégrer en 2016 l’Hôtel Villa Borghèse **** à Gréoux les Bains comme factotum, spécialisé dans l’entretien et la rénovation du site.
              </p>
              <p>
                En 2019, Mohamed choisit de quitter le monde du salariat et de se mettre à son compte en créant l’entreprise TMT Multi Travaux, dont l’ambition est vous faire partager son expérience et de vous accompagner dans la réalisation de vos projets.
              </p>
            </div>
          </div>
        </section> { /*close container */ }

          {/* banner */}
          <section className="banner-home-container d-flex justify-content-center align-items-around w-100">
            <div className="banner-home-content d-flex flex-column justify-content-center align-items-center">       
              <img src={ guarantie } className="logo-guarantie" alt="Le logo de la garantie décenale" />
              <a href="#" className="mt-5 mb-4">Contactez-nous</a>
            </div>
          </section>

          {/* service */}
          <section className="container">
            <div className="row">
              <div className="col-12">
                <h1 className='m-4 m-md-5 mb-md-3'>Mes services</h1>
                <CardServiceHome />

              </div>
            </div>
          </section>

        
      </main>
    );
};

export default Home;