import { useRouter } from 'next/router'
import {useManualQuery} from "graphql-hooks";
import {GET_PHOTOS_BY_ALBUM_ID} from "../queries";
import {useEffect, useState} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Gallery = () =>{
    const {query:{id}} = useRouter()
    const [fetchPhotosByAlbumId] = useManualQuery(GET_PHOTOS_BY_ALBUM_ID);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([])
    useEffect(() => {
       const getPhotosByAlbumId = async () =>{
           setLoading(true)
            let result = await fetchPhotosByAlbumId({variables:{albumId:id}});
            if(result.error){
                console.log('error')
            }else{
                setData(result.data.getPhotosByAlbumId)
            }
            setLoading(false)
        }
        getPhotosByAlbumId()
    },[id])

    return <Carousel showIndicators={false} >{
        data.map(({Url,title},index)=>(<div key={index}>
            <img src={Url} />
            <p className="legend">{title}</p>
        </div>))
    }</Carousel>
}
export default Gallery
