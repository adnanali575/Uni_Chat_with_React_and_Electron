import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDoc, db, doc } from "../firebase/firebaseConfig";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import { PostType } from "../types";
import { dateFormater, timeFormater } from "../helpers";
import PostDescription from "../components/postCard/PostDescription";

const PostView = () => {
  const [postData, setpostData] = useState<PostType>();

  const params = useParams();

  useEffect(() => {
    const docRef = doc(db, "posts", params.id as string);
    getDoc(docRef).then((docSnap) => {
      const data = docSnap.data() as PostType;
      if (data) {
        setpostData(data);
      }
    });
  }, [params.id]);

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-fit">
        <div className="h-[200px] xs:h-[300px] sm:h-[400px] lg:h-[500px]">
          {postData?.postFiles && <ImageSlider files={postData.postFiles} />}
        </div>
      </div>
      <div className="sm:w-full md:w-[400px] lg:w-[500px]">
        {/* -------------------------------------------------------------- */}
        <div className="bg-white h-full shadow-md p-2">
          <div className="flex cursor-pointer">
            <div className="w-[50px] h-[50px] rounded-full overflow-hidden flex items-center justify-center">
              <img className="w-full h-fit" src={postData?.ownerProfile} />
            </div>
            <div className="px-2">
              <p className="font-bold">{postData?.ownerName}</p>
              {postData?.publishDate && (
                <p className="text-xs">
                  {dateFormater(postData.publishDate)}
                  {timeFormater(postData.publishDate)}
                </p>
              )}
            </div>
          </div>
          {postData?.description && <PostDescription post={postData} />}
        </div>
      </div>
    </div>
  );
};

export default PostView;
