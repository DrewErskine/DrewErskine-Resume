import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css'; // Core Swiper CSS
import 'swiper/css/navigation'; // Navigation CSS
import { Navigation } from 'swiper/modules';

interface Project {
  title: string;
  video: string;
}

const projectData: Project[] = [
  {
    title: "Project A",
    video: "/projects/plog.mp4"
  },
  {
    title: "Project B",
    video: "/projects/hopebabelikesmyorb.mp4"
  },
  {
    title: "Project C",
    video: "/projects/videoGFX.mp4"
  }
];

interface ProjectCarouselProps {
  onSlideChange: (index: number) => void;
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ onSlideChange }) => {
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation]} // Explicitly pass the Navigation module
        navigation={true} // Enable navigation arrows
        loop={true} // Enable looping
        onSlideChange={(swiper) => onSlideChange(swiper.activeIndex)}
      >
        {projectData.map((project, index) => (
          <SwiperSlide key={index}>
            <video controls className="carousel-video">
              <source src={project.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectCarousel;
