import {useEffect, useState} from "react";
import {useManualQuery} from "graphql-hooks";
import {useUserContext} from "../../../context/UserContext";
import {GET_ALBUMS_BY_USER_ID} from '../queries'


const AlbumsList = (props) => {
    const {token} = useUserContext();
    const [loadingAlbums, setLoadingAlbums] = useState(true);
    const [error, setError]= useState(null);
    const [data, setData] = useState([]);
    const [fetchAlbumsByUserId] = useManualQuery(GET_ALBUMS_BY_USER_ID);


    useEffect( () => {
        const getAlbums = async () => {
            const result = await fetchAlbumsByUserId({variables:{userId:1}})
            if(result.error){
                console.error(result.error)
                setError(result.error)
            }else{
                console.log('albums:',result.data.getAlbumsByUserId)
                setData(result.data.getAlbumsByUserId);
                setLoadingAlbums(false)
            }
        }
        getAlbums()
    },[])

    return (<div className="px-2" style={{maxHeight:400, overflow:'scroll'}}>
        {
            loadingAlbums && <div>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        }
        {
            error && <div>Error loading Albums</div>
        }
        <ul className="list-group list-group-flush">
        {
            data.map(({title,numberOfPhotos},index) =>(<li className="list-group-item d-flex justify-content-between pb-2" key={index} >

                <div>
                    <i className="bi-images"></i>
                    <span className="card-text">{ title}</span>
                </div>
                <span className="badge bg-primary rounded-pill d-flex align-items-center">{numberOfPhotos}</span>
            </li>))
        }
        </ul>
    </div>)
}

export default AlbumsList
