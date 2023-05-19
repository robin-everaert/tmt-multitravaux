
const CardServiceHome = () => {

    // Load icons section service : 
    const importIconService = (img) => {
        let images = {};
        img.keys().forEach((key) => (images[key] = img(key)));
        return images;   
    };  
    const images = importIconService(require.context('../assets/images/pages/home/icons', false, /\.(png|jpe?g|svg)$/));
    
    //  Title card service : 
    let title = [
        "Électricité", "Plomberie", "Carrelage", 
        "Peinture & placoplatre", "Salle de bains",
        "Aménagement cuisine", "Dépannage" ];

    return (
        <div className="card-service-container d-flex align-items-center flex-wrap justify-content-center">
            {
            Object.keys(images).map((imageKey, index) => (
            <a href="" key={imageKey} className="card text-center d-flex align-items-center mt-5 p-1 p-md-2">
                <img src={images[imageKey]} alt="Image" />  
                <span className="mt-2 mt-md-3">{ title[index] }</span>    
            </a>
            ))
            }
        </div>
    );
};

export default CardServiceHome;