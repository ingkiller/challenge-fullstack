export default ({email,body}) => (<div className="col-11 py-2">
    <div className="card" style={{boxShadow: '0px 0px 4px rgb(0 0 0 / 12%)'}}>
        <div className="card-body">
            <div className="row">
                <div className="col-12  d-flex justify-content-start">
                    <div className="card-title fw-bold fst-italic">{email}</div>
                </div>
                <div className="col-12">
                    <div className="card-text text-start">
                        {body}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>)
