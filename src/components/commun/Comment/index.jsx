export default ({email,body}) => (<div className="col-11 py-2">
    <div className="card">
        <div className="card-body">
            <div className="row">
                <div className="col-12 d-flex justify-content-start">
                    <div className="card-title fw-bold fst-italic">{email}</div>
                </div>
                <div className="col-12">
                    <div className="card-text">
                        {body}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>)
