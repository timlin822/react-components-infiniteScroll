import {useState,useEffect} from 'react';

import ImageCard from './ImageCard';

import IMAGES_DATA from 'data/ImagesData';

import './Image.css';

const ImagesList=()=>{
    const showImageNumber=8;
    const [visibleIndex,setVisibleIndex]=useState(16);

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(((window.innerHeight+Math.ceil(window.pageYOffset)) >= document.body.offsetHeight-10) && visibleIndex<IMAGES_DATA.length){
                setVisibleIndex(visibleIndex+showImageNumber);
            }
        });
    },[visibleIndex]);

    return (
        <div className="image-grid">
            {IMAGES_DATA.slice(0,visibleIndex).map(image=>(
                <ImageCard key={image.id} image={image} />
            ))}
        </div>
    );
}

export default ImagesList;