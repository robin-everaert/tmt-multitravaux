
const SiteBar = () => {
    return (
            <div className="contact-sitebar-container w-100 d-flex flex-column flex-md-row justify-content-md-end">
                <div className="location-sitebar-container">
                    <i className='fa fa-map-marker'></i>
                    <span>
                        55 rue de La Quintane - 04220 Sainte-Tulle
                    </span>
                </div>
                <div className="phone-sitebar-container">
                    <i className='fa fa-mobile-phone'></i>
                    <a href="tel:0632962874">
                        06 32 93 28 74
                    </a>
                </div>
                <div className="mail-sitebar-container">
                    <i className='fa fa-envelope'></i>
                    <a href="mailto:tmt.entreprise04@gmail.com">
                        tmt.entreprise04@gmail.com
                    </a>
                </div>
            </div>
    );
};

export default SiteBar;