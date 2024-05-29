import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import YouTube from 'react-youtube';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/carousel.css';

interface ProjectCarouselProps {
  onSlideChange: (index: number) => void;
}

function ProjectCarousel({ onSlideChange }: ProjectCarouselProps) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
    onSlideChange(selectedIndex);
  };

  const videoOptions = {
    height: '315',
    width: '560',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="carousel-container">
      <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
        <Carousel.Item>
          <div className="video-wrapper">
            <YouTube videoId="sd2SzXcdwww" opts={videoOptions} className="carousel-video" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="video-wrapper">
            <YouTube videoId="_GjHFRpjevQ" opts={videoOptions} className="carousel-video" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="video-wrapper">
            <YouTube videoId="-yS6S4-LRBc" opts={videoOptions} className="carousel-video" />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ProjectCarousel;
