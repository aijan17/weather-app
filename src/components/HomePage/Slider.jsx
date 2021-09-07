
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Slider = () => {
        
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 
    }
  };

        return(
            <Carousel 
            className="slider-bg"
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} 
                infinite={true}
                
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
              
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px" 
                
                >
                        <div className="img-size">
                            <img src="https://image.freepik.com/free-vector/white-clouds-rain-fog-sky_107791-4444.jpg" />
                        </div  >
                        <div  className="img-size">
                            <img src="https://image.freepik.com/free-photo/3d-blue-sky-with-fluffy-white-clouds_1048-7934.jpg" alt="" />
                        </div>
                        <div  className="img-size">
                            <img src="https://images.pexels.com/photos/773953/pexels-photo-773953.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                        </div>
                        <div  className="img-size">
                            <img src="https://images.pexels.com/photos/1292115/pexels-photo-1292115.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                        </div>
                </Carousel>
        )
}
      