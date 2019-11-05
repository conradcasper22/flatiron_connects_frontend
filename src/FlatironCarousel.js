import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Image } from 'semantic-ui-react'
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
                <Image as='a' href="https://flatironschool.com/" src="http://pngimg.com/uploads/football/football_PNG52759.png" />
                    {/* <img src="EwzujL1Imgur.jpg" alt='flatiron people'/> */}
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <Image src="" alt='flatiron people'/>
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src="src/images/Image from iOS (6).jpg" alt='flatiron people'/>
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div>
                    <img src="src/images/Image from iOS (7).jpg" alt='flatiron people'/>
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div>
                    <img src="src/images/Image from iOS.jpg" alt='flatiron people'/>
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
            </div>
        );
    }
}