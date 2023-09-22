import React, { useState } from "react";
import BaseButton from "../BaseButton";
import FileUploader from "./FileUplader";
import { postType } from "../../types";

const PostWindow = () => {
  const [filesData, setfilesData] = useState<File[]>([]);
  const [postData, setPostData] = useState<postType>({
    ownerName: "",
    ownerId: "",
    postText: "",
    postImages: [],
    postId: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostData({ ...postData, postText: event.target.value });
  };

  const handleFiles = (files: File[]) => {
    setfilesData(files);
    setPostData({ ...postData, postImages: files });
  };

  const publishPost = () => {
    console.log(postData);
  };

  if (false) filesData;

  return (
    <>
      <div className="relative flex flex-col justify-between w-full h-full">
        <div className=" h-[60px] fixed top-0 w-full font-bold text-2xl border-b border-gray-1">
          <h1 className="bg-white flex items-center justify-center text-text-gray-1 w-full h-full">
            Create a post
          </h1>
        </div>
        <div className="px-6 py-2 mt-[60px] overflow-y-auto overflow-x-hidden grow">
          <textarea
            value={postData.postText}
            onChange={handleChange}
            placeholder="Write post description here..."
            className="resize-none outline-none p-2 my-4 min-h-[150px] w-full border border-gray-1 rounded-md focus:border-green-1 transition-default "
          ></textarea>
          <FileUploader handleFiles={(files) => handleFiles(files)} />
        </div>
        <div className="w-full z-50 shadow-white-glow bg-white p-2 border-t border-gray-1 flex justify-end">
          <BaseButton OnClick={publishPost} title="Publish" />
        </div>
      </div>
    </>
  );
};

export default PostWindow;
