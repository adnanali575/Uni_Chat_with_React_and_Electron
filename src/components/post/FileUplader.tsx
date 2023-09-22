import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

interface FileUpladerType {
  handleFiles: (files: File[]) => void;
}

const FileUploader: React.FC<FileUpladerType> = ({ handleFiles }) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (event?: React.ChangeEvent<HTMLInputElement>) => {
    if (event?.target.files) {
      const files = Array.from(event.target.files);
      const newFiles: File[] = [];
      files.forEach((file) => {
        if (
          file.type == "image/png" ||
          file.type == "image/jpeg" ||
          file.type == "image/jpg" ||
          file.type == "video/mp4"
        ) {
          newFiles.push(file);
        }
      });
      setSelectedFiles((prevSelectedFiles) => [
        ...prevSelectedFiles,
        ...newFiles,
      ]);
      handleFiles(newFiles);
    }
  };

  const clearFile = (index: number) => {
    console.log(index);
    // setSelectedFiles({...selectedFiles, selectedFiles[index]: {} as File})
  };

  const handleCrearFiles = () => {
    handleFileChange();
    setSelectedFiles([]);
    handleFiles(selectedFiles);
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
      {selectedFiles.length > 0 && (
        <div className=" overflow-hidden border border-gray-1 rounded-md my-4 p-3">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 ">
            {selectedFiles.map((file, index) => (
              <div
                key={index}
                className="relative w-fit h-auto sm:h-[110px] flex items-center justify-center rounded-md overflow-hidden cursor-pointer"
              >
                {file.type === "video/mp4" ? (
                  <video>
                    <source src={URL.createObjectURL(file)} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={URL.createObjectURL(file)}
                    className="w-full sm:w-auto h-[150px] sm:h-auto"
                    alt="Uploaded Image"
                  />
                )}
                <div className="w-full h-full flex justify-end opacity-0 hover:opacity-100 bg-black-transparent text-white absolute top-0 left-0 transition-default">
                  <span
                    onClick={() => clearFile(index)}
                    className="mx-3 my-2 bg-white-transparent active:scale-95 h-[30px] w-[30px] rounded-full flex justify-center items-center"
                  >
                    <FontAwesomeIcon icon="trash" className="text-red" />
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end mt-3">
            <button
              onClick={handleCrearFiles}
              className="px-2 py-1 rounded-md bg-red flex items-center gap-2 text-white"
            >
              <FontAwesomeIcon icon="trash" />
              Clear All
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
