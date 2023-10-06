import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDoc, db, doc } from "../firebase/firebaseConfig";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import { PostType } from "../types";

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
      <div className="sm:w-full bg-blue md:w-[400px] lg:w-[500px]">Hello</div>
    </div>
  );
};

export default PostView;
