import React from 'react'
import Carousel from 'react-elastic-carousel';
import CBooks from "./CBooks";

import {
    Link
  } from "react-router-dom";

const CarouselBooks = () => {

    // Funciones encargadas para el carrusel de libros
    const [items] = React.useState(
        [{id:'65676', img: 'https://www.gutenberg.org/cache/epub/65676/pg65676.cover.medium.jpg'},
         {id:'65677', img: 'https://www.gutenberg.org/cache/epub/65677/pg65677.cover.medium.jpg'},
         {id:'65682', img: 'https://www.gutenberg.org/cache/epub/65682/pg65682.cover.medium.jpg'},
         {id:'65680', img: 'https://www.gutenberg.org/cache/epub/65680/pg65680.cover.medium.jpg'}, 
         {id:'65683', img: 'https://www.gutenberg.org/cache/epub/65683/pg65683.cover.medium.jpg'}, 
         {id:'65673', img: 'https://www.gutenberg.org/cache/epub/65673/pg65673.cover.medium.jpg'}, 
         {id:'58221', img: 'https://www.gutenberg.org/cache/epub/58221/pg58221.cover.medium.jpg'}, 
         {id:'57448', img: 'https://www.gutenberg.org/cache/epub/57448/pg57448.cover.medium.jpg'}, 
         {id:'54', img: 'https://www.gutenberg.org/cache/epub/54/pg54.cover.medium.jpg'}, 
         {id:'65433', img: 'https://www.gutenberg.org/cache/epub/65433/pg65433.cover.medium.jpg'}, 
         {id:'56682', img: 'https://www.gutenberg.org/cache/epub/56682/pg56682.cover.medium.jpg'}, 
         {id:'2701', img: 'https://www.gutenberg.org/cache/epub/2701/pg2701.cover.medium.jpg'}]
        );

    const breakPoints = [
        { width: 240, itemsToShow: 1},
        { width: 480, itemsToShow: 2, itemsToScroll: 2 },
        { width: 720, itemsToShow: 3, itemsToScroll: 3 },
        { width: 960, itemsToShow: 4, itemsToScroll: 4 },
        { width: 1200, itemsToShow: 5, itemsToScroll: 5 },
        { width: 1440, itemsToShow: 6, itemsToScroll: 6 },
    ];

    return (
        <div className='carousel'>

        
            <Carousel breakPoints={breakPoints}>
                {items.map((item) => (
                    <Link style={{"display":"inherit" , "text-decoration": "none"}} to={"/books/" +item.id }>
                    <CBooks id={item.id} url={item.img}/>
                    </Link>

                    ))}
            </Carousel>
        </div>
    )
}

export default CarouselBooks