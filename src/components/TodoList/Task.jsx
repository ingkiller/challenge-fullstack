export default ({id, title, completed,onToggle,onDelete}) => ( <li className="list-group-item py-1 d-flex align-items-center border-0 mb-2 rounded justify-content-between"
                                                               style={{backgroundColor: '#f4f6f7'}}>
    <div>
        <input className="form-check-input me-2" type="checkbox" value=""
               aria-label="..." checked={completed} onChange={(e) =>onToggle(id)}/>
        {
            completed === true ?<s>{title}</s>:title
        }
    </div>
    <div>
        <button className="btn btn-sm" onClick={e => onDelete(id)}>
            <i className="bi-trash" style={{color:'#106eea'}} />
        </button>
    </div>
</li>)
