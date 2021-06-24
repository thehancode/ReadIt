import React from 'react'
import Carousel from 'react-elastic-carousel';
import Item from "../Item";

const CarouselBooks = () => {

    // Funciones encargadas para el carrusel de libros
    const [items, setItems] = React.useState([1, 2, 3, 4, 5, 6, 7, 8]);

    const breakPoints = [
        { width: 1, itemsToShow: 2},
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 }
    ];

    return (
        <div>
            <Carousel breakPoints={breakPoints}>
                {items.map((item) => (
                    <Item key={item}>{item}</Item>
                ))}
            </Carousel>
        </div>
    )
}

export default CarouselBooks