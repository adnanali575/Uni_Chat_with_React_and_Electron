import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const PostWindow = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null); // Initialize to null

  const getFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];

    if (selectedFile) {
      // Use FileReader to read the file and convert it to a data URL
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          const dataUrl = e.target.result as string;
          setImageSrc(dataUrl);
          console.log("Image source set:", dataUrl);
        }
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <>
      <div>
        <h1 className="text-center font-bold text-2xl text-text-gray">
          Create post
        </h1>
        <textarea
          placeholder="Write post description here..."
          className="resize-none outline-none p-2 my-4 min-h-[150px] w-full border border-gray-1 rounded-md"
        ></textarea>
        <div className="w-full">
          <label
            htmlFor="image-input"
            className="flex justify-center items-center rounded-md w-full h-[50px] border border-gray-1 cursor-pointer hover:bg-greenish-gray active:bg-white transition-default"
          >
            <span className="flex items-center gap-3 text-text-gray">
              <FontAwesomeIcon icon="upload" />
              <p>Upload Photo or Video</p>
            </span>
          </label>
          <input
            onChange={getFile}
            type="file"
            id="image-input"
            className="hidden"
          />
        </div>
        <div className="flex justify-evenly flex-wrap gap-3 border overflow-hidden border-gray-1 rounded-md my-4 p-2">
          {imageSrc ? (
            <img src={imageSrc} className="h-[150px]" alt="Uploaded Image" />
          ) : (
            <p>No image selected</p>
          )}
        </div>
      </div>
    </>
  );
};

export default PostWindow;
