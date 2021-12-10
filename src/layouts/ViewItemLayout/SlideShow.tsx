import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { itemImagesUrl } from '../../_assets/paths';

const SlideShow = (props: { images: any }) => {
    console.log(process.env.PUBLIC_URL)
    return (
      <div className="slide-container">
        <Slide>
         {props.images.map((img: any, index: any)=> (
            <div className="each-slide" key={index} >
                <img src={ '/resources/item_images/' + img.image } alt="item_image" style={{ objectFit: "contain", maxWidth: '100%'}}/>
              {/* <div style={{'backgroundImage': `url('/resources/item_images/${img.image}`}}> */}
              {/* </div> */}
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default SlideShow;