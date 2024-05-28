// src/components/ProjectCarousel.tsx
import { useState } from 'react';
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

  // Use process.env.PUBLIC_URL for the correct base path in production
  const basePath = process.env.PUBLIC_URL;

  return (
    <div className="carousel-container">
      <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
        <Carousel.Item>
          <div className="video-wrapper">
            <video className="carousel-video" controls>
              <source src={`${basePath}/plog.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="video-wrapper">
            <video className="carousel-video" controls>
              <source src={`${basePath}/hopebabelikesmyorb.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="video-wrapper">
            <video className="carousel-video" controls>
              <source src={`${basePath}/videoGFX.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ProjectCarousel;
