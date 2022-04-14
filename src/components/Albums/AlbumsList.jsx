import {useEffect, useState} from "react";
import {useManualQuery} from "graphql-hooks";
import Link from 'next/link'
import {useUserContext} from "../../../context/UserContext";
import {GET_ALBUMS_BY_USER_ID} from '../queries'
import ServicesList from "../Services/ServicesList";

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
                setData(result.data.getAlbumsByUserId);
                setLoadingAlbums(false)
            }
        }
        getAlbums()
    },[])

    return (<section id="pricing" className="pricing">
        <div className="container">
            <div className="row justify-content-start">
                <div className="col-md-3">
                    <ServicesList/>
                </div>
                <div className="col-md-6">
                    <div className="box maxHeightScroll px-2"  style={{boxShadow:"none"}}>
                            {
                                loadingAlbums &&<div className="row justify-content-center">
                                    <div className="col-1"><div className="spinner-border text-primary" role="status">
                                        <span className="visually-hidden">Loading...</span></div>
                                    </div>
                                        <div className="col-7 text-start">
                                            <h4>Loading Albums...</h4>
                                        </div>
                                </div>

                            }
                            {
                                error && <div>Error loading Albums</div>
                            }
                            {
                                !loadingAlbums && !error && <>
                                    <div className="container">
                                        <div className="section-title">
                                            <h3>Albums List</h3>
                                        </div>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        {
                                            data.map(({id,title,numberOfPhotos},index) =>(<li className="list-group-item pb-2" key={index}>
                                                <Link href={`albums/${id}`} >
                                                    <a className="w-100">
                                                        <div className="d-flex justify-content-between">
                                                            <div className="text-dark">
                                                                <i className="bi-images"></i>
                                                                <span className="card-text ms-1">{ title}</span>
                                                            </div>
                                                            <span className="badge bg-primary rounded-pill d-flex align-items-center">{numberOfPhotos}</span>
                                                        </div>
                                                    </a>
                                                </Link>
                                            </li>))
                                        }
                                    </ul>
                                </>
                            }

                    </div>

                </div>
            </div>
        </div>
    </section>

       )
}

export default AlbumsList
