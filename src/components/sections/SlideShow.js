import { Carousel } from 'react-bootstrap';
import React, { useState } from 'react';
import '../../style/SlideShow.css';

const SlideShow = () => {

    const banner = [
        {
            "id": 1,
            "img": "https://i.ibb.co/CWYMsQS/71hx4a-mpe-L-removebg-preview.png",
            "title": <>LET'S DECORATE YOUR <span style={{ color: 'rgb(4, 4, 91)' }}>HOME</span></>,

            "subTitle": "With over 8000 lighting fixtures and 60 brands, we have the largest range of lighting and lamps online. No matter which room you want to decorate, you'll find it here!"
        },
        {
            "id": 2,
            "img": "https://i.ibb.co/DQjGN9t/large-TALA0784-removebg-preview.png",
            "title": <>EXPLORE OUR LIGHTS <span style={{ color: 'rgb(4, 4, 91)' }}>COLLECTION</span></>,

            "subTitle": "Our product selection process focuses on quality issues rather than sales volume in all categories from lowest bulb to fancy lights."
        },
        {
            "id": 3,
            "img": "https://i.ibb.co/nzwPzWs/glass-table-lamp-fog-big-lgh0192-removebg-preview.png",
            "title": <>BUY YOUR FAVOURITE <span style={{ color: 'rgb(4, 4, 91)' }}>ONES</span></>,

            "subTitle": "We care our customer for building relationship, not just customer-seller deal. You can exchange if any kind of damages are found on products. Happy Shopping!"
        },
    ]

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className='banner'>
            <Carousel fade activeIndex={index} onSelect={handleSelect} interval={4000}>
                {
                    banner.map((item) => (
                        <Carousel.Item key={item.id}>
                            <div className="row align-items-center carousel-sec ">

                                <div className="col-md-7 " style={{ paddingRight: '100px' }} >
                                    <h6 className="text-uppercase"> WELCOME TO LIGHTHOUSE SHOP</h6>
                                    <h1 style={{ color: '#5E5D5D', textTransform: 'uppercase', fontWeight: '700', fontSize: '50px' }}>{item.title}</h1>
                                    <p style={{ color: '#747577' }}>{item.subTitle}</p>
                                    <div className="d-flex align-items-center">
                                        <button type="button" className="btn  shop_now text-white me-5">Shop Now</button>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <img
                                        className="slide-img img-fluid"
                                        src={item.img}
                                        alt="First slide"
                                    />
                                </div>
                            </div>
                        </Carousel.Item>
                    ))
                }

            </Carousel>

        </div>

    );
};

export default SlideShow;