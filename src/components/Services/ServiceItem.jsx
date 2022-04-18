const ServiceItem = ({title,icon,description}) => (<div className="col-12 d-flex align-items-stretch">
    <div className="icon-box">
        <div className="icon"><i className={icon}></i></div>
        <h4><a href="">{title}</a></h4>
        <p>{description}</p>
    </div>
</div>)
export default ServiceItem
