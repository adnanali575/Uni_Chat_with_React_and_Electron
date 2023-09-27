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

const PostWindow = () => {
  const [isBtnLoading, setIsBtnLoading] = useState(false);
  const [filesData, setfilesData] = useState<File[]>([]);
  const [postData, setPostData] = useState<PostToPublishType>({
    ownerName: "Shahid Hussain",
    ownerId: "zUGyNOLiAhOD4emagvoJ8jH72853",
    ownerProfile:
      "https://cdn.pixabay.com/photo/2022/01/04/08/05/public-speaking-6914556_640.jpg",
    description: "",
    postFiles: [],
  });

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostData({ ...postData, description: event.target.value });
  };

  const handleFiles = (files: File[]) => {
    setfilesData(files);
  };

  const publishPost = async () => {
    const postFiles = {
      name: "i.pinimg.com",
      url: "https://i.pinimg.com/originals/4d/f1/29/4df12992c336d52c8e6199b354051abd.jpg",
      type: "image/jpeg",
    };

    const data = {
      likeCount: 123445,
      postFiles: postFiles,
      commentCount: 57,
      shareCount: 8,
      publishDate: Date.now(),
      ownerName: "Pixel Pioneer",
      ownerId: "876245230981234",
      ownerProfile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI8DK8HCuvWNyHHg8enmbmmf1ue4AeeF3GDw&usqp=CAU",
      description:
        "The sun dipped below the horizon, casting a warm orange glow across the tranquil sea. Seagulls soared, their calls fading into the gentle lapping of waves against the shore. A sense of calm settled in as the day drew to a close, painting the sky with hues of pink and gold.",
    };

    const docRef = await addDoc(collection(db, "posts"), data);
    console.log("Document written with ID: ", docRef.id);

    return;

    console.log(postData.description);
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
      setPostData((prevData) => ({
        ...prevData,
        postFiles: [...(prevData.postFiles || []), ...newFileData],
      }));
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
          <div className="container">
            <button className="animated-button">Hover Me</button>
          </div>

          <textarea
            value={postData.description}
            onChange={handleChange}
            placeholder="Write post description here..."
            className="resize-none outline-none p-2 my-4 min-h-[150px] w-full border border-gray-1 rounded-md focus:border-blue transition-default "
          ></textarea>
          <FileUploader handleFilesEmits={(files) => handleFiles(files)} />
          {/* <video>
            <source src="" type="video/mp4" />
          </video> */}
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

export default PostWindow;
