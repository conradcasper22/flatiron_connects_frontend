import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class FlatironCarousel extends React.Component {

    constructor() {
        super()
        this.state = {
            activeIndex: null
        }
    }

    componentDidMount(){ this.setState({activeIndex:0}) }

    render() {
        return (
            <div>
                <Carousel autoPlay={true} swipeable={true} showThumbs={false} infiniteLoop={true} interval={2500}>
                    <div>
                    <img src="https://i.ibb.co/NKY8R5B/Image-from-i-OS-6.png" alt="flatiron people" border="0"/>
                        
                    </div>
                    <div>
                        <img src="https://i.ibb.co/GkkTN9h/Image-from-i-OS-7.png" alt='flatiron people'/>
                        
                    </div>
                    <div>
                        <img src="https://i.ibb.co/nCWT35c/Image-from-i-OS-5.png" alt='flatiron people'/>
                        
                    </div>
                    <div>
                        <img src="https://i.ibb.co/R651XBm/Image-from-i-OS.png" alt='flatiron people'/>
                    
                    </div>
                    <div>
                        <img src="https://i.ibb.co/5FXS1bf/Ewzuj-L1-Imgur.png" alt='flatiron people'/>
                        
                    </div>
                </Carousel>
            </div>
        );
    }
}