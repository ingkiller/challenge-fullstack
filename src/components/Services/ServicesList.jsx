import ServiceItem from "./ServiceItem";
import servicesJson from "../commun/services.json"
const ServicesList = () => {
    return ( <section id="services" className="services">
        <div className="row maxHeightScroll">
            {
                servicesJson.map((serv,index) => (<ServiceItem key={index} {...serv}/>))
            }
        </div>
    </section>)
}

export default ServicesList
