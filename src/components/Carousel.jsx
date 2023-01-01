import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// Images
import Image1 from "../assets/images/map.jpg";
import Image2 from "../assets/images/Image2.jpg";
import Image3 from "../assets/images/Image3.jpg";
import Image4 from "../assets/images/Image4.jpg";

// Emblla Carousel Options
const options = { delay: 3000 };
const autoplayRoot = (emblaRoot) => emblaRoot.parentElement;
const autoplay = Autoplay(options, autoplayRoot);

const Carousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [autoplay]);

  return (
    <div className="embla h-96 overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex">
        <div className="embla__slide">
          <img src={Image1} alt="Carousel Image" />
        </div>
        <div className="embla__slide">
          <img src={Image2} alt="Carousel Image" />
        </div>
        <div className="embla__slide">
          <img src={Image3} alt="Carousel Image" />
        </div>
        <div className="embla__slide">
          <img src={Image4} alt="Carousel Image" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
