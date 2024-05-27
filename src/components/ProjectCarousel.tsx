import { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

interface ProjectCarouselProps {
  onSlideChange: (index: number) => void;
}

function ProjectCarousel({ onSlideChange }: ProjectCarouselProps) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
    onSlideChange(selectedIndex);
  };

  return (
    <div className="carousel-container">
      <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
        <Carousel.Item>
          <div className="video-wrapper">
            <video className="carousel-video" controls>
              <source src="/plog.mp4" type="video/mp4" />
            </video>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="video-wrapper">
            <video className="carousel-video" controls>
              <source src="/hopebabelikesmyorb.mp4" type="video/mp4" />
            </video>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="video-wrapper">
            <video className="carousel-video" controls>
              <source src="/videoGFX.mp4" type="video/mp4" />
            </video>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ProjectCarousel;
