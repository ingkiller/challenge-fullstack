import { useRouter } from 'next/router'
import {useManualQuery} from "graphql-hooks";
import {GET_PHOTOS_BY_ALBUM_ID} from "../queries";
import {useEffect, useState} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image'

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
                setData([])
            }else{
                setData(result.data.getPhotosByAlbumId)
            }
            setLoading(false)
        }
        getPhotosByAlbumId()
    },[id,fetchPhotosByAlbumId])

    return loading ? <div>loading</div>:<Carousel showIndicators={false} >{
        data.map(({Url,title},index)=>(<div key={index}>
            <Image src={Url} layout="responsive" alt="" />
            <p className="legend">{title}</p>
        </div>))
    }</Carousel>
}
export default Gallery
