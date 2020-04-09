import React from 'react';
import { Carousel } from 'react-bootstrap';

const HomePagePages = React.memo(() => {
    return (
        <div className="container c-container-carousel">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block h-100 image-carousel"
                        src="https://scontent-xsp1-1.xx.fbcdn.net/v/t1.0-9/p720x720/84634756_1853236188141892_8909589263876620288_o.jpg?_nc_cat=105&_nc_sid=85a577&_nc_ohc=4fGvVsBq15IAX_OG6i9&_nc_ht=scontent-xsp1-1.xx&_nc_tp=6&oh=57f1eb176c383fa864ed6845b190728b&oe=5EA96F71"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block h-100 image-carousel"
                        src="https://scontent-xsp1-2.xx.fbcdn.net/v/t1.0-9/p720x720/79461985_1792741410858037_7285880798928961536_o.jpg?_nc_cat=104&_nc_sid=7aed08&_nc_ohc=Zab1Nw_fmBsAX-wohER&_nc_ht=scontent-xsp1-2.xx&_nc_tp=6&oh=9dc65e87514d947b8988937bb9f47dae&oe=5EAC9398"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block h-100 image-carousel"
                        src="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-9/p960x960/47369646_1474592252672956_2545412196175708160_o.jpg?_nc_cat=110&_nc_sid=7aed08&_nc_ohc=Flvju_wq58AAX95br1Y&_nc_ht=scontent-hkt1-1.xx&_nc_tp=6&oh=d98030fc7aca0f4967605cf18536e57b&oe=5EABE793"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
});

export default HomePagePages;