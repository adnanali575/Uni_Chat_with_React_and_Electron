import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const FileUploader: React.FC = () => {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files) {
      const imageArray: string[] = [];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = (event) => {
          if (event.target && event.target.result) {
            imageArray.push(event.target.result as string);

            if (imageArray.length === files.length) {
              setSelectedImages([...selectedImages, ...imageArray]);
            }
          }
        };

        reader.readAsDataURL(file);
      }
    }
  };

  return (
    <div>
      <div className="w-full">
        <label
          htmlFor="image-input"
          className="relative flex items-center justify-center gap-3 rounded-md cursor-pointer border-dashed border-2 border-gray-1 w-full h-[50px] text-text-gray hover:bg-greenish-gray active:bg-white transition-default"
        >
          <FontAwesomeIcon icon="upload" />
          <p>Upload Photo or Video</p>
          <input
            onChange={handleImageChange}
            type="file"
            id="image-input"
            className="w-full absolute bottom-0 h-full opacity-0 cursor-pointer"
          />
        </label>
      </div>
      {selectedImages.length > 0 && (
        <div className="flex justify-evenly flex-wrap gap-3 border overflow-hidden border-gray-1 rounded-md my-4 p-2">
          {selectedImages.map((image) => (
            <img
              src={image}
              className="w-full h-auto sm:w-auto sm:h-[150px] rounded-md"
              alt="Uploaded Image"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FileUploader;
