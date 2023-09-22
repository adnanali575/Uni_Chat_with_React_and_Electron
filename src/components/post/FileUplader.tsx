import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const FileUploader: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = Array.from(event.target.files);
      setSelectedFiles(files);
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
            onChange={handleFileChange}
            type="file"
            multiple
            id="image-input"
            className="w-full absolute bottom-0 h-full opacity-0 cursor-pointer"
          />
        </label>
      </div>
      {setSelectedFiles.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 border overflow-hidden border-gray-1 rounded-md my-4 p-3">
          {selectedFiles.map((file, index) => (
            <div
              key={index}
              className="relative w-fit rounded-md overflow-hidden cursor-pointer"
            >
              <img
                src={URL.createObjectURL(file)}
                className="w-full h-auto sm:w-auto sm:h-[150px]"
                alt="Uploaded Image"
              />
              <div className="w-full h-full flex justify-end opacity-0 hover:opacity-100 bg-black-transparent text-white absolute top-0 left-0 transition-default">
                <span className="mx-3 my-2 bg-white-transparent active:scale-95 h-[30px] w-[30px] rounded-full flex justify-center items-center">
                  <FontAwesomeIcon icon="trash" className="text-red" />
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileUploader;
