import React, { useState } from "react";
import BaseButton from "../BaseButton";
import FileUploader from "./FileUplader";
import { PostToPublishType } from "../../types";
import {
  addDoc,
  collection,
  db,
  getDownloadURL,
  ref,
  storage,
  uploadBytes,
} from "../../firebase/firebaseConfig";

const AddPostWindow: React.FC<{ postAdded: () => void }> = ({ postAdded }) => {
  const [isBtnLoading, setIsBtnLoading] = useState(false);
  const [filesData, setfilesData] = useState<File[]>([]);
  const [postData, setPostData] = useState<PostToPublishType>({
    ownerName: "Shahid Hussain",
    ownerId: "zUGyNOLiAhOD4emagvoJ8jH72853",
    ownerProfile:
      "https://marketplace.canva.com/EAFfyNv3EC4/2/0/400w/canva-orange-black-modern-facebook-profile-picture-uLIeZOQD1sg.jpg",
    description: "",
    publishDate: new Date(Date.now()),
    postFiles: [],
  });

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostData({ ...postData, description: event.target.value });
  };

  const handleFiles = (files: File[]) => {
    setfilesData(files);
  };

  const publishPost = async () => {
    setIsBtnLoading(true);
    const promises = filesData.map(async (file) => {
      let storageRef = ref(storage, "post_images/" + file.name);
      if (file.type === "video/mp4") {
        storageRef = ref(storage, "post_videos/" + file.name);
      }

      const snapshot = await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);

      return {
        name: snapshot.ref.name,
        url: downloadURL,
        type: file.type,
      };
    });

    try {
      const newFileData = await Promise.all(promises);
      const newData = {
        ...postData,
        postFiles: [...(postData.postFiles || []), ...newFileData],
      };
      setPostData((prevData) => ({
        ...prevData,
        postFiles: [...(prevData.postFiles || []), ...newFileData],
      }));

      addDoc(collection(db, "posts"), newData);
      postAdded();
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsBtnLoading(false);
    }
  };

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
            value={postData.description}
            onChange={handleChange}
            placeholder="Write post description here..."
            className="resize-none outline-none p-2 my-4 min-h-[150px] w-full border border-gray-1 rounded-md focus:border-blue transition-default "
          ></textarea>
          <FileUploader handleFilesEmits={(files) => handleFiles(files)} />
        </div>
        <div className="w-full z-50 shadow-white-glow bg-white p-2 border-t border-gray-1 flex justify-end">
          <BaseButton
            OnClick={publishPost}
            loading={isBtnLoading}
            title="Publish"
          />
        </div>
      </div>
    </>
  );
};

export default AddPostWindow;
