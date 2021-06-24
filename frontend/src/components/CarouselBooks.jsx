import React from 'react'
import Carousel from 'react-elastic-carousel';
import CBooks from "./CBooks";

const CarouselBooks = () => {

    // Funciones encargadas para el carrusel de libros
    const [items] = React.useState(
        [{id:'book1', img: 'https://www.gutenberg.org/cache/epub/65676/pg65676.cover.medium.jpg'},
         {id:'book2', img: 'https://www.gutenberg.org/cache/epub/65677/pg65677.cover.medium.jpg'},
         {id:'book3', img: 'https://www.gutenberg.org/cache/epub/65682/pg65682.cover.medium.jpg'},
         {id:'book4', img: 'https://www.gutenberg.org/cache/epub/65680/pg65680.cover.medium.jpg'}, 
         {id:'book5', img: 'https://www.gutenberg.org/cache/epub/65683/pg65683.cover.medium.jpg'}, 
         {id:'book6', img: 'https://www.gutenberg.org/cache/epub/65673/pg65673.cover.medium.jpg'}, 
         {id:'book7', img: 'https://www.gutenberg.org/cache/epub/58221/pg58221.cover.medium.jpg'}, 
         {id:'book8', img: 'https://www.gutenberg.org/cache/epub/57448/pg57448.cover.medium.jpg'}, 
         {id:'book9', img: 'https://www.gutenberg.org/cache/epub/54/pg54.cover.medium.jpg'}, 
         {id:'book10', img: 'https://www.gutenberg.org/cache/epub/65433/pg65433.cover.medium.jpg'}, 
         {id:'book11', img: 'https://www.gutenberg.org/cache/epub/56682/pg56682.cover.medium.jpg'}, 
         {id:'book12', img: 'https://www.gutenberg.org/cache/epub/2701/pg2701.cover.medium.jpg'}]
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
                    <CBooks id={item.id} url={item.img}/>
                ))}
            </Carousel>
        </div>
    )
}

export default CarouselBooks