import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

const ImageSlider = () => {
  const images = [900, 800, 700, 600, 500].map((size) => ({
    src: `https://placedog.net/${size}/${size}`,
  }));

  return (
    <div className="h-[400px] w-[800px] mx-auto">
      <Carousel images={images} />
    </div>
  );
};

export default ImageSlider;
