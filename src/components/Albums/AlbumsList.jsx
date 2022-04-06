import {useEffect, useState} from "react";
import {useManualQuery} from "graphql-hooks";
import Link from 'next/link'
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
            data.map(({id,title,numberOfPhotos},index) =>(<li className="list-group-item pb-2"
                                                           key={index}


            >
                <Link href={`albums/${id}`} >
                    <a className="w-100">
                        <div className="d-flex justify-content-between">
                            <div>
                                <i className="bi-images"></i>
                                <span className="card-text">{ title}</span>
                            </div>
                            <span className="badge bg-primary rounded-pill d-flex align-items-center">{numberOfPhotos}</span>

                        </div>
                            </a>

                </Link>
                </li>))
        }
        </ul>
    </div>)
}

export default AlbumsList
