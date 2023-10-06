import React from "react";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import { PostFileType } from "../../types";
import "./ImageSlider.css";

const ImageSlider: React.FC<{ files: PostFileType[] }> = ({ files }) => {
  return (
    <div className="h-full w-full">
      <Carousel
        images={files.map((file) => ({
          src: file.url,
        }))}
      />
    </div>
  );
};

export default ImageSlider;
