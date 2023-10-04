import PostCard from "../components/postCard/PostCard";
import { useEffect, useState } from "react";
import { onSnapshot, db, collection, query } from "../firebase/firebaseConfig";
import { PostType } from "../types";
import SkeletonLoader from "../components/SkeletonLoader";

const HomepageView = () => {
  const [postData, setPostData] = useState<PostType[]>([]);
  let [cardDataLoaded, setCardDataLoaded] = useState(false);

  useEffect(() => {
    const citiesQuery = query(collection(db, "posts"));

    try {
      setCardDataLoaded(true);
      const unsubscribe = onSnapshot(citiesQuery, (querySnapshot) => {
        let newData: PostType[] = [];
        querySnapshot.forEach((doc) => {
          newData.push(doc.data() as PostType);
          // console.log(doc.data().publishDate)
        });
        setPostData(newData);
        setCardDataLoaded(false);
      });
      return () => {
        unsubscribe();
      };
    } catch (error) {
      setCardDataLoaded(false);
    }
  }, []);

  return (
    <div className="flex justify-between text-9xl">
      <div className="p-4 w-[25%] overflow-hidden hidden lg:flex z-0 fixed left-0 top-[57px] bottom-0">
        <div className="w-full px-4 pe-4 hover:pe-[11px] overflow-x-hidden overflow-y-hidden hover:overflow-y-auto flex flex-col gap-3 rounded-md">
          {/* {arr.map((e,i) => (
            <b
              key={i}
              className="px-9 py-5 bg-white shadow-md hover:scale-110 active:scale-100 transition-default cursor-pointer rounded-md text-center text-5xl"
            >
              {e}
            </b>
          ))} */}
        </div>
      </div>

      <div className="text-base w-full xs:w-11/12 md:w-[80%] lg:w-1/2 mx-auto py-4 flex flex-col gap-3">
        <div className="w-full lg:w-11/12 mx-auto">
          {cardDataLoaded ? (
            <SkeletonLoader />
          ) : (
            <>
              {postData.map((post, i) => (
                <PostCard key={i} post={post} />
              ))}
            </>
          )}
        </div>
      </div>

      <div className="p-4 w-[25%] overflow-hidden hidden lg:flex  z-0 fixed right-0 top-[57px] bottom-0">
        <div className="w-full px-4 pe-4 hover:pe-[11px] overflow-x-hidden overflow-y-hidden hover:overflow-y-auto flex flex-col gap-3 rounded-md">
          {/* {arr.map((e) => (
            <b
              key={e}
              className="px-9 py-5 bg-white shadow-md hover:scale-110 active:scale-100 transition-default cursor-pointer rounded-md text-center text-5xl"
            >
              {e}
            </b>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default HomepageView;
